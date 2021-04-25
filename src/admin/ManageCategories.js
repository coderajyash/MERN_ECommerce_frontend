import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { getCategories } from "./helper/adminapicall";

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);

  const { user, token } = isAuthenticated();

  const preload = () => {
    getCategories().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  return (
    <Base title="Admin" description="">
      <h2 className="mb-4">All Categories:</h2>
     <div className="row">
        <div className="col-6 p-2 border border-primary text-center rounded">
        
          {categories.map((category, index) => {
            return (
              <h3 className="text-dark" key={index}>
                {category.name}
              </h3>
            );
          })}
          
        </div>
        <div className="col-6 justify-content-center">
        <Link className="btn btn-primary" to={`/admin/dashboard`}>
        <span className="m-3">Admin Home</span>
      </Link>
        </div>
        <hr className="mt-4"></hr>
      </div>
    </Base>
  );
};

export default ManageCategories;
