import React, { useState, useContext } from "react";
import BarChart from "../../components/BarChart/BarChart";
import PieChart from "../../components/PieChart/PieChart";
import { UserData } from "../../chart-mock-data";
import { DrinkContext } from "../../ContexApi";
import { DrinkTypeData, GlassTypeData } from "./StatsLogic";
import Table from "../../components/Table/Table";

const Stats = () => {
  const drinkBase = useContext(DrinkContext);
  const [alcoholData, setAlcoholData] = useState({
    labels: DrinkTypeData(drinkBase).map((data) => data.type),
    datasets: [
      {
        label: "Types of drinks",
        data: DrinkTypeData(drinkBase).map((data) => data.number),
      },
    ],
  });

  const [glassData, setGlassData] = useState({
    labels: GlassTypeData(drinkBase).map((data) => data.type),
    datasets: [
      {
        label: "Number of glasses",
        data: GlassTypeData(drinkBase).map((data) => data.number),
      },
    ],
  });

  return (
    <div>
      <h1>Stats</h1>
      <ul>
        <li>najpopularniejszy składnik</li>
        <li>najbardziej komentowane drinki</li>
        <li>
          <b>do kazdego z nich tabela</b>
        </li>
      </ul>
      <div>
        <div style={{ width: 500 }}>
          <PieChart chartData={alcoholData} />
        </div>
        <div>
          <Table data={DrinkTypeData(drinkBase)} />
        </div>
      </div>
      <div>
        <div style={{ width: 500 }}>
          <BarChart chartData={glassData} />
        </div>
        <div>
          <Table data={GlassTypeData(drinkBase)} />
        </div>
      </div>
    </div>
  );
};

export default Stats;
