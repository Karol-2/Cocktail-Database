import React from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import "./DrinkDetails.scss";
import GetIngredients from "./DrinkDetailsLogic";
import { DrinkContext } from "../../ContexApi";

const DrinkDetails = () => {
  const { id } = useParams();
  const drinkBase = useContext(DrinkContext);
  const currentDrink = drinkBase.filter((drink) => drink.idDrink === id)[0];
  const Ingredients = GetIngredients(currentDrink);

  // console.log(currentDrink);
  return (
    <div className="drink-details">
      <div className="product-info">
        <div className="photo-part">
          <img
            src={currentDrink.strDrinkThumb}
            alt="a glass with a drink"
          ></img>
          <p>drink id - {id}</p>
        </div>
        <div className="info-part">
          <h1>{currentDrink.strDrink}</h1>
          <h3>Category: {currentDrink.strCategory}</h3>
          <h4>{currentDrink.strAlcoholic + " drink"}</h4>
          <h4>Glass: {currentDrink.strGlass}</h4>
          <h2>Ingredients: </h2>
          <ul>
            {Ingredients.map((ingr, key) => (
              <li id={key}>{ingr.name + " " + ingr.amount}</li>
            ))}
          </ul>

          <h2>Instructions: </h2>
          <ol>
            {currentDrink.strInstructions
              .split(".")
              .filter((instr) => instr !== "")
              .map((sentence, key) => (
                <li id={key}>{sentence}</li>
              ))}
          </ol>
        </div>
      </div>
      <div className="comments">
        <h1>Comments</h1>
      </div>
    </div>
  );
};

export default DrinkDetails;
