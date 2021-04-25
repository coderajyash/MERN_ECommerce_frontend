import React from "react";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";

const UserDashBoard = () => {

  const {
    user: { name, email, role }
  } = isAuthenticated();

  return (
    <Base title="UserDashBoard page" description="">
    <hr></hr>
    <br></br>
    <div className="row">
    <div className=" col-12 card m-auto ">
    <h4 className="card-header">User Information</h4>
    <ul className="list-group">
      <li className="list-group-item">
      <span class="btn rounded rounded bg-primary text-white m-2">Name</span> {name}
      </li>
      <li className="list-group-item">
      <span class="btn rounded rounded bg-primary text-white m-2">Email</span> {email}
      </li>
   </ul>
   </div>
  </div>
    </Base>
  );
};

export default UserDashBoard;
