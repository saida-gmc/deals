import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dealDetails } from "../redux/actions/dealActions";
import CartCard from "./CartCard";
import { addOrder } from "../redux/actions/orderActions";
import { updatePrice } from "../redux/actions/commanActions";

const ConfirmCommand = ({ match, history }) => {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.userList.authenticated);
  useEffect(() => {
    dispatch(dealDetails(match.params.id));
    dispatch(updatePrice());
  }, [dispatch, match.params.id]);

  const orderItems = useSelector((state) => state.cart.cartDetails);
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const length = orderItems.length;

  const order = (e) => {
    e.preventDefault();
    orderItems.map((el) => dispatch(addOrder(el)));
    history.push("/resume");
  };

  return (
    <div>
      {length !== 0 ? (
        <>
          <section className="jumbotron text-center">
            <div className="container">
              <h2 className="jumbotron-heading">My shopping CART</h2>
            </div>
          </section>
          {orderItems.map((deal, key) => (
            <CartCard key={deal._id} deal={deal} />
          ))}

          <div className="col mb-2">
            <tr className="totalprice">
              <td />
              <td />
              <td />
              <td />
              <td>
                <strong>Total</strong>
              </td>
              <td className="text-right">
                <strong>{cartTotal} </strong>
                <sup>DT</sup>
              </td>
            </tr>
          </div>
          <div className="col mb-2">
            <div className="row">
              <div className="col-sm-12  col-md-6">
                <Link to="/">
                  <button className="btn btn-block btn-light">
                    Continue Shopping
                  </button>
                </Link>
              </div>
              <div className="col-sm-12 col-md-6 text-right">
                {authenticated ? (
                  <button
                    onClick={(e) => order(e)}
                    className="btn btn-block btn-success text-uppercase"
                  >
                    Checkout
                  </button>
                ) : (
                  <Link to="/login">
                    <button className="btn btn-block btn-success text-uppercase">
                      Checkout
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2>Vous n'avez pas d'articles dans le panier</h2>
          <div className="col">
            <Link to="/">
              <button className="exclusive">Continue Shopping</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default ConfirmCommand;
