import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editOrder } from "../redux/actions/orderActions";

const ProviderCard = ({ deal }) => {
  const dispatch = useDispatch();
  const myorders = useSelector((state) => state.orderList.order);
  const user = useSelector((state) => state.userList.user);
  const filter = myorders.filter((el) => el.orderItems.provider === user._id);
  console.log(filter.status);
  //update status
  const [newstatus, setNewStatus] = useState("registred");
  const changeStatus = (e) => {
    setNewStatus({ ...newstatus, status: e.target.value });
  };
 
  return (
    <tbody key={deal._id}>
      <td>{deal.orderItems.description}</td>
      <td>{deal.orderItems.price} DT</td>
      <td>{deal.orderItems.qty}</td>
      <td>{deal.status}</td>
      <td>
        <select
          className="form-select form-select-sm"
          aria-label=".form-select-sm example"
          name="status"
          onChange={(e) => changeStatus(e)}
        >
          <option selected>changer le statut</option>
          <option name="registred">registred</option>
          <option name="en cours">en cours</option>
          <option name="annulée">annulée</option>
        </select>
        <button onClick={(e) => dispatch(editOrder(deal._id, newstatus))}>
          valider
        </button>
      </td>
    </tbody>
  );
};

export default ProviderCard;
