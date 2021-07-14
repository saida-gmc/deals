import React from "react";
import { useSelector } from "react-redux";

const Resume = () => {
  const id = useSelector((state) => state.userList.user._id);
  const cart = useSelector((state) => state.cart.cartDetails);
  const total = useSelector((state) => state.cart.cartTotal);
  console.log(total);
  return (
    <div className="cart-page">
      <br />
      <h4>Votre commande est bien enregistrée, merci de votre confiance</h4>

      <div className="container mb-4">
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Product</th>

                    <th scope="col" className="text-center">
                      Quantity
                    </th>
                    <th scope="col" className="text-right">
                      Price
                    </th>
                    <th> Sub Total </th>
                  </tr>
                </thead>
                {cart.map((el, key) => (
                  <tbody key={el._id}>
                    <tr>
                      <td>{el.description}</td>
                      <td>{el.qty}</td>

                      <td>
                        {el.price} <sup>DT</sup>
                      </td>
                      <td className="text-right">
                        {el.price * el.qty} <sup>DT</sup>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
              <table>
                <tr>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td>Total</td>
                  <td className="text-right">
                    {total} <sup>DT</sup>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <p>
        Vous pouvez suivre votre commande depuis votre espace client{" "}
        <a href={`/user-profile/${id}`}>cliquez ici</a>
      </p>
    </div>
  );
};

export default Resume;
