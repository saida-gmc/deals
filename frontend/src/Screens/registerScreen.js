import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/userActions";

const RegisterScreen = ({ history }) => {
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    adress: "",
    role: "",
  });
  const change = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };
  const [checkedUser, setCheckedUser] = useState(false);
  const [checkedProvider, setCheckedProvider] = useState(false);
  const changeRole = (e) => {
    setNewUser({ ...newUser, role: e.target.name });
  };

  console.log(newUser);
  const add = (e) => {
    e.preventDefault();
    dispatch(register(newUser, history));
  };

  return (
    <div className="container">
      <div className="frame">
        <div className="nav">
          <h1>Nouveau client ?</h1>
        </div>
        <div ng-app ng-init="checked = false">
          <form className="form-signin" action method="post" name="form">
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
            <label htmlFor="name">Name</label>{" "}
            <input
              className="form-styling"
              type="text"
              name="name"
              placeholder
              onChange={(e) => change(e)}
            />
            <label htmlFor="adress">Adress</label>{" "}
            <input
              className="form-styling"
              type="text"
              name="adress"
              placeholder
              onChange={(e) => change(e)}
            />{" "}
            <label htmlFor="phone">Phone</label>{" "}
            <input
              className="form-styling"
              type="text"
              name="phone"
              placeholder
              onChange={(e) => change(e)}
            />
            <div className="box">
              <input
                type="checkbox"
                id="provider"
                name="provider"
                onClick={() => setCheckedProvider(!checkedProvider)}
                onChange={(e) => changeRole(e)}
                disabled={checkedUser}
              />
              <label for="provider"> Provider</label>
              <br />
              <input
                type="checkbox"
                id="user"
                name="user"
                onClick={() => setCheckedUser(!checkedUser)}
                onChange={(e) => changeRole(e)}
                disabled={checkedProvider}
              />
              <label for="user"> User</label>
              <br />
              {/* <button
                className="btn-signin"
                href="register"
                onClick={(e) => add(e)}
              >
                register
              </button> */}
              <a className="btn-signin" href="login" onClick={(e) => add(e)}>
                register
              </a>{" "}
            </div>
          </form>
        </div>
      </div>{" "}
    </div>
  );
};

export default RegisterScreen;
