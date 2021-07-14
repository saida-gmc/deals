import React from "react";

const OrderCardUser = ({ deal }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>order</th>
            <th>price</th>
            <th>quantité</th>
          </tr>
        </thead>
        <tbody>
          <td>{deal.description}</td>
          <td>{deal.price} DT</td>
          <td>{deal.qty}</td>
        </tbody>
      </table>
    </div>
  );
};
export default OrderCardUser;
