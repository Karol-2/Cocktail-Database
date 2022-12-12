import React from "react";
import "./Drinkcard.scss";

const Drinkcard = (props) => {
  return (
    <div className="DrinkCard">
      <img src={props.drink.strDrinkThumb} alt="a glass with a drink"></img>
      <p>{props.drink.strDrink}</p>
      <p>{props.drink.strAlcoholic}</p>
      <p>More info...</p>
    </div>
  );
};

export default Drinkcard;
