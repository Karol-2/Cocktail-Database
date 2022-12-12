import React from "react";
import data from "../../data.json";
import { useState } from "react";
import Drinkcard from "./../../components/Drinkcard/Drinkcard";
import "./Database.scss";

const Database = () => {
  const [searchTerm, SetSearchTerm] = useState("");

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
        {data
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
