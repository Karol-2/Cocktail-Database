import React from "react";
import { Link } from "react-router-dom";
import "./Drinkcard.scss";

const Drinkcard = (props) => {
  return (
    <div className="DrinkCard" id={props.drink.idDrink}>
      <img src={props.drink.strDrinkThumb} alt="a glass with a drink"></img>
      <p>{props.drink.strDrink}</p>
      <p>{props.drink.strAlcoholic}</p>
      <Link to={`/drink/${props.drink.idDrink}`}>
        {" "}
        <p>More info...</p>
      </Link>
    </div>
  );
};

export default Drinkcard;
