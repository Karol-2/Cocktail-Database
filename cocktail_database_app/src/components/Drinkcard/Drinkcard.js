import React from "react";
import { Link } from "react-router-dom";

const Drinkcard = (props) => {
  return (
    <div
      className="card bg-light mb-3"
      id={props.drink._id}
      style={{ width: "300px" }}
    >
      <img
        src={props.drink.strDrinkThumb}
        alt="a glass with a drink"
        className="card-img-top img-fluid"
      ></img>
      <div className="card-body" style={{ backgroundColor: "#F8F9FA" }}>
        <h5 className="card-title">{props.drink.strDrink}</h5>
        <p className="card-text">{props.drink.strAlcoholic}</p>
        <Link to={`/drink/${props.drink._id}`} className="btn btn-primary">
          More info...
        </Link>
      </div>
    </div>
  );
};

export default Drinkcard;
