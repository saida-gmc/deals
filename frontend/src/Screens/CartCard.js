import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  decrement,
  increment,
} from "../redux/actions/commanActions";

const CartCard = ({ deal }) => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.cart.cartDetails);
  const ind = item.findIndex((element) => element._id === deal._id);
  const deleteItem = () => {
    dispatch(removeFromCart(deal));
  };

  return (
    <div>
      <div className="container mb-4">
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col"> </th>
                    <th scope="col">Product</th>

                    <th scope="col" className="text-center">
                      Quantity
                    </th>
                    <th scope="col" className="text-right">
                      Price
                    </th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Link to={`/${deal._id}`}>
                        <img
                          src={deal.pictureURL}
                          width="280px"
                          height="175px"
                          alt="deal"
                        />{" "}
                      </Link>
                    </td>
                    <td>{deal.description}</td>

                    <td>
                      <button
                        className="btn-minus"
                        onClick={() => dispatch(decrement(deal._id))}
                      >
                        -
                      </button>
                      <button className="btn">{item[ind].qty}</button>
                      <button
                        className="btn-plus"
                        onClick={() => dispatch(increment(deal._id))}
                      >
                        +
                      </button>
                    </td>
                    <td className="text-right">
                      {deal.price} <sup>DT</sup>
                    </td>
                    <td className="text-right">
                      <button
                        class="btn btn-sm btn-danger"
                        onClick={(e) => deleteItem(deal)}
                      >
                        <Link to="">
                          <img
                            src="https://image.flaticon.com/icons/png/512/1214/1214428.png"
                            alt="supprimer"
                            width="30px"
                            height="30px"
                          />
                        </Link>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td>Sub-Total</td>
                    <td className="text-right">
                      {deal.price * item[ind].qty} <sup>DT</sup>{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
