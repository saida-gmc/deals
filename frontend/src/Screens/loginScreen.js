import React from "react";
import "./login.css";
import {Link} from "react-router-dom"

const loginScreen = () => {
  return (
    <div className="container">
      <div className="frame">
        <div className="nav">
          <h1>Déjà client? Identifiez vous </h1>
        </div>
        <div ng-app ng-init="checked = false">
          <form className="form-signin" action method="post" name="form">
            {" "}
            <label htmlFor="fullname">Email</label>
            <input
              className="form-styling"
              type="text"
              name="username"
              placeholder
            />{" "}
            <label htmlFor="password">Password</label>{" "}
            <input
              className="form-styling"
              type="text"
              name="password"
              placeholder
            />{" "}
            <div>
             <Link to="/profile">
              <a className="btn-signin" href="login">
                Login to your account
              </a>{" "}
              </Link>
            </div>
            <br/>
            <div>
             <Link to="/register">
              <a className="btn-signin" href="login">
                New ? Create your account
              </a>{" "}
              </Link>
            </div>
          </form>
        </div>
      </div>{" "}
    </div>
  );
};

export default loginScreen;
