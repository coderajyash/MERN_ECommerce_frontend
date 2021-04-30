import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import "../styles.css"

const Base = ({
  title = "My Title",
  description = "My desription",
  className = "",
  
  children
}) => (
  <div>
    <Menu />
    <div className="container-fluid" style={{minHeight:'100vh'}}>
      <div className="jumbotron text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer className="footer bg-dark mt-auto py-2" style={{marginTop:'auto'}}>
      <div className="container-fluid text-white text-center py-3">
        <h6>Made with <i class="fas fa-heart"></i></h6>
        <Link className="text-dark btn btn-warning mt-2"
        to="/contact">Contact Developer</Link>
      </div>
      <p className="text-muted mt-2">Login using admin account for exploring features : admin@gmail.com || 1234</p>
    </footer>
  </div>
);

export default Base;
