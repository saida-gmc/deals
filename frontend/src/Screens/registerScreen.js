import React from "react";
import {Link} from "react-router-dom"

const loginScreen = () => {
  return (
    <div className="container">
      <div className="frame">
        <div className="nav">
          <h1>Nouveau client ?</h1>
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
            <label htmlFor="pnamehone">Name</label>{" "}
            <input
              className="form-styling"
              type="text"
              name="name"
              placeholder
            />
            <label htmlFor="adress">Adress</label>{" "}
            <input
              className="form-styling"
              type="text"
              name="adress"
              placeholder
            />{" "}
            <label htmlFor="paphonessword">Phone</label>{" "}
            <input
              className="form-styling"
              type="text"
              name="phone"
              placeholder
            />
            <div>
  <Link to="/profile">              
  <a className="btn-signin" href="register">
                register
              </a>
              </Link>
            </div>
          </form>
        </div>
      </div>{" "}
    </div>
  );
};

export default loginScreen;
