import React, { useState, useEffect } from "react";
import "./profile.css";
import { Button, Modal } from "react-bootstrap";
import { editUser } from "../redux/actions/userActions";
import { getOrder } from "../redux/actions/orderActions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const user = useSelector((state) => state.userList.user);
  const getorders = useSelector((state) => state.orderList.order).filter(
    (el) => el.user === user._id
  );

  const filter = getorders
    .filter((el) => el.user === user._id)
    .map((el) => el.orderItems);
  const stat = getorders
    .filter((el) => el.user === user._id)
    .map((el) => el.status);
  console.log(stat);

  console.log("filter", filter);
  console.log("orders", getorders);
  const [newUser, setNewUser] = useState(user);
  const change = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };
  const edit = (e) => {
    e.preventDefault();
    dispatch(editUser(user._id, newUser));
    handleClose();
  };

  return (
    <div className="wrapper">
      <div className="left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTov701drDtzW5INfDz5_NdUhhxUVDv44LrXw&usqp=CAU"
          alt="user"
          width={100}
        />
        <h4>{user.name}</h4>
        <h6>{user.email}</h6>
        <button
          type="submit"
          name="Submit"
          onClick={handleShow}
          className="exclusive"
        >
          <span> Edit my profile</span>
        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Edit my profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label className="col-form-label">name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={newUser.name}
              placeholder="enter"
              onChange={(e) => change(e)}
            />
            <label className="col-form-label">phone</label>
            <input
              className="form-control"
              type="phone"
              value={newUser.phone}
              name="phone"
              placeholder="enter"
              onChange={(e) => change(e)}
            />
            <label className="col-form-label">adress</label>
            <input
              className="form-control"
              type="adress"
              name="adress"
              value={newUser.adress}
              placeholder="enter"
              onChange={(e) => change(e)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={(e) => edit(e)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="right">
        <div className="info">
          <h3>Informations</h3>
          <div className="info_data">
            <div className="data">
              <h4>adress</h4>
              <h6>{user.adress}</h6>
            </div>
            <div className="data">
              <h4>Phone</h4>
              <h6>{user.phone}</h6>
            </div>
          </div>
        </div>
        <div className="projects">
          <h3>My orders</h3>
          <div className="projects_data">
            {getorders.length === 0 ? (
              <h5>
                Vous n'avez pas de commandes actuellement, pour finaliser votre
                commande veuillez accéder à votre{" "}
                <Link to="/confirm">panier</Link>{" "}
              </h5>
            ) : (
              <div>
                {" "}
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>order</th>
                        <th>price</th>
                        <th>quantité</th>
                        <th>status</th>
                      </tr>
                    </thead>
                    {getorders.map((deal, key) => (
                      <tbody key={deal._id}>
                        <td>{deal.orderItems.description}</td>
                        <td>{deal.orderItems.price} DT</td>
                        <td>{deal.orderItems.qty}</td>
                        <td>{deal.status}</td>
                      </tbody>
                    ))}
                  </table>
                </div>{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
