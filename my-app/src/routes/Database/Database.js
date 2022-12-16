import React from "react";
import { useState, useEffect, useRef } from "react";
import Drinkcard from "./../../components/Drinkcard/Drinkcard";
import selected_drinks from "./DatabaseSelectedDrinks";
import "./Database.scss";

const Database = () => {
  const [searchTerm, SetSearchTerm] = useState("");
  const [drinkBase, SetDrinkBase] = useState([]);
  const renderAfterCalled = useRef(false);

  useEffect(() => {
    if (!renderAfterCalled.current) {
      selected_drinks.forEach((drink) =>
        fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink}`
        )
          .then((response) => response.json())
          .then((data) =>
            SetDrinkBase((old_drinks) => [...old_drinks, data.drinks[0]]).sort()
          )
      );
    }
    renderAfterCalled.current = true;
  }, []);

  return (
    <div className="mainPage">
      <input
        type="text"
        placeholder="Search your drink of choice..."
        onChange={(event) => {
          SetSearchTerm(event.target.value);
        }}
      />
      <div className="gallery">
        {console.log(drinkBase)}
        {drinkBase
          .filter((value) => {
            if (searchTerm === "") {
              return value;
            } else if (
              value.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
            )
              return value;
          })
          .map((val, key) => {
            return <Drinkcard drink={val} />;
          })}
      </div>
    </div>
  );
};

export default Database;
