import React from "react";
import { useState, useContext } from "react";
import Drinkcard from "./../../components/Drinkcard/Drinkcard";
import "./Database.scss";
import { DrinkContext } from "../../ContexApi";

const Database = () => {
  const [searchTerm, SetSearchTerm] = useState("");

  const drinkBase = useContext(DrinkContext);

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
