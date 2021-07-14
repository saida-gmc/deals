import React from "react";

const OrderCard = ({ deal }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>order</th>
            <th>user</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          <td>{deal.description}</td>
          <td>{deal.userEmail}</td>
          <td>{deal.userPhone}</td>
        </tbody>
      </table>
    </div>
  );
};
export default OrderCard;
