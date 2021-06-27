import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
const DealsCard = ({ deal }) => {
  return (

    <figure className="snip1527 hover">
    
        <img src={deal.pictureURL} alt="pr-sample24" />

      <figcaption>
        <div className="date">
          <span className="day">{deal.date}</span>
        </div>
        <h3> {deal.description}</h3>
        <p>{deal.price} {deal.promo}</p>
        <Link to={`/deal/${deal._id}`}>More details</Link>
      </figcaption>
    </figure>
  

  );
};

export default DealsCard;
