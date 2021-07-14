import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
const DealsCard = ({ deal }) => {
  return (
    <Link to={`/${deal._id}`}>
      {" "}
      <div className="container-fluid mt-3 mb-3">
        <div className="colonne">
          <div className="card">
            <div className="img-container">
              {/* <div className="d-flex justify-content-between align-items-center p-2 first">
                {" "}
                <span className="percent">-15%</span>{" "}
                <span className="wishlist">
                  <i className="fa fa-heart" />
                </span>{" "}
              </div>{" "} */}
              <img src={deal.pictureURL} className="fluid" alt="deal" />
            </div>
            <div className="product-detail-container">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="mb-0">{deal.description}</h6>{" "}
                <span className="text-danger font-weight-bold">
                  {deal.price} DT
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <div className="ratings">
                  {" "}
                  <i className="fa fa-star" /> <span>{deal.location}</span>{" "}
                </div>
                <div className="size">
                  {/* {" "}
                  <label className="radio">
                    {" "}
                    <input
                      type="radio"
                      name="size2"
                      defaultValue="small"
                    />{" "}
                    <span>S</span>{" "}
                  </label>{" "}
                  <label className="radio">
                    {" "}
                    <input
                      type="radio"
                      name="size2"
                      defaultValue="Medium"
                      defaultChecked
                    />{" "}
                    <span>M</span>{" "}
                  </label>{" "}
                  <label className="radio">
                    {" "}
                    <input
                      type="radio"
                      name="size2"
                      defaultValue="Large"
                    />{" "}
                    <span>L</span>{" "}
                  </label>{" "} */}
                  <h6>{deal.promo}</h6>
                </div>
              </div>
              <div className="mt-3">
                {" "}
                <button className="exclusive">plus de détails</button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DealsCard;
