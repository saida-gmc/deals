import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getproviders, deleteprovider } from "../redux/actions/userActions";
import "./usersCard.css";

const UsersList = () => {
  const dispatch = useDispatch();

  const providers = useSelector((state) => state.userList.providers);
  console.log(providers);
  useEffect(() => {
    dispatch(getproviders());
  }, [dispatch]);

  return (
    <div className="grid-7 element-animation">
      {providers.map((el, key) => (
        <div className="carduser color-carduser-2" key={el._id}>
          <img
            src="data:image/png;base64,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"
            alt="profile-pic"
            className="profile"
          />
          <h1 className="title-2">{el.name}</h1>
          <h3> {el.email}</h3>
          <div className="desc top">
            <h3>{el.adress}</h3>
          </div>
          <button
            className="btn color-a top"
            onClick={() => dispatch(deleteprovider(el._id))}
          >
            {" "}
            supprimer{" "}
          </button>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
