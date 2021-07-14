import React from "react";
import { Link } from "react-router-dom";

const Card = ({ deal }) => {
  return (
    <div>
      <ul>
        <Link to={`/${deal._id}`}>
          <li>{deal.description}</li>
        </Link>
      </ul>
    </div>
  );
};

export default Card;
