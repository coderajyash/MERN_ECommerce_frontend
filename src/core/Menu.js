import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return "nav-link text-primary rounded-pill bg-light";
  } else {
    return "nav-link text-white";
  }
};

const Menu = ({ history }) => (
  <div>
    <ul className="nav nav-pills justify-content-end bg-primary rounded-pill p-2">
    
      <li className="nav-item">
        <Link className={currentTab(history, "/")} to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={currentTab(history, "/cart")}
          to="/cart"
        >
          Cart
        </Link>
      </li>
      {isAuthenticated() && isAuthenticated().user.role === 0 && (
        <li className="nav-item">
          <Link
            className={currentTab(history, "/user/dashboard")}
            to="/user/dashboard"
          >
            Profile
          </Link>
        </li>
      )}
      {isAuthenticated() && isAuthenticated().user.role === 1 && (
        <li className="nav-item">
          <Link
            className={currentTab(history, "/admin/dashboard")}
            to="/admin/dashboard"
          >
            Admin
          </Link>
        </li>
      )}
      {!isAuthenticated() && (
        <Fragment>
          <li className="nav-item">
            <Link
              className={currentTab(history, "/signup")}
              to="/signup"
            >
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={currentTab(history, "/signin")}
              to="/signin"
            >
              Sign In
            </Link>
          </li>
        </Fragment>
      )}
      {isAuthenticated() && (
        <li className="nav-item">
          <span
            className="nav-link text-white rounded-pill bg-warning"
            onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}
          >
            Signout
          </span>
        </li>
      )}
    </ul>
  </div>
);

export default withRouter(Menu);
