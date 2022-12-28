import React, { useState, useContext } from "react";
import BarChart from "../../components/BarChart/BarChart";
import PieChart from "../../components/PieChart/PieChart";
import { DrinkContext } from "../../ContexApi";
import { DrinkTypeData, GlassTypeData } from "./StatsLogic";
import Table from "../../components/Table/Table";
import './Stats.scss'

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
        label: "Number of recepies",
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
      <div className="chart-page">
        <div style={{ width: 500 }}>
          <PieChart chartData={alcoholData} />
        </div>
        <div>
          <h1>Drink Type</h1>
          <Table data={DrinkTypeData(drinkBase)} />
        </div>
      </div>
      <div className="chart-page">
        <div style={{ width: 500 }}>
          <BarChart chartData={glassData} />
        </div>
        <div>
        <h1>Glass Types</h1>
          <Table data={GlassTypeData(drinkBase)} />
        </div>
      </div>
    </div>
  );
};

export default Stats;
