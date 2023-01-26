import React, { useContext, useState } from "react";
import Row from "react-bootstrap/Row";
import { DrinkContext } from "../../contexts/DrinkBaseAPI";
import Drinkcard from "./../../components/Drinkcard/Drinkcard";
import "./Database.scss";

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
        <Row xs={1} md={2} mx={2} className="g-4">
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
              return <Drinkcard drink={val} id={key} key={key} />;
            })}
        </Row>
      </div>
    </div>
  );
};

export default Database;
