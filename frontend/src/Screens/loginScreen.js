import React, { useState } from "react";
import "./login.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../redux/actions/userActions";

const LoginScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const change = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const add = (e) => {
    e.preventDefault();
    dispatch(login(user, history));
  };
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
              name="email"
              placeholder
              onChange={(e) => change(e)}
            />{" "}
            <label htmlFor="password">Password</label>{" "}
            <input
              className="form-styling"
              type="password"
              name="password"
              placeholder
              onChange={(e) => change(e)}
            />{" "}
            <div>
              <a className="btn-signin" href="login" onClick={(e) => add(e)}>
                Login to your account
              </a>{" "}
            </div>
            <br />
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

export default LoginScreen;
