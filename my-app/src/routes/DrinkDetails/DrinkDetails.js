import React from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { DrinkContext } from "../../ContexApi";

const DrinkDetails = () => {
  const { id } = useParams();
  const drinkBase = useContext(DrinkContext);
  const currentDrink = drinkBase.filter((drink) => drink.idDrink === id)[0];
  console.log(currentDrink);

  return (
    <div>
      <h1>DrinkDetails - {id}</h1>
      <p>{currentDrink.strDrink}</p>
    </div>
  );
};

export default DrinkDetails;
