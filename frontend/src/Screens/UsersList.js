import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getusers, deleteuser } from "../redux/actions/userActions";
import "./usersCard.css";

const UsersList = () => {
  const dispatch = useDispatch();

  const clients = useSelector((state) => state.userList.users);
  console.log(clients);

  useEffect(() => {
    dispatch(getusers());
  }, [dispatch]);

  return (
    <div className="grid-7 element-animation">
      {clients.map((el, key) => (
        <div className="carduser color-carduser-2" key={el._id}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTov701drDtzW5INfDz5_NdUhhxUVDv44LrXw&usqp=CAU"
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
            onClick={() => dispatch(deleteuser(el._id))}
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
