import React, { useState, useContext } from "react";
import "./Stats.scss";
import NewBarChart from "../../components/NewBarChart/NewBarChart";

const Stats = () => {
  return (
    <div>
      <h1>Stats</h1>
      <div>
        {" "}
        <NewBarChart
          type="alco"
          title="Types of drinks"
          ytitle="Number of drinks"
          color="#f90000"
          thing="Drinks"
        />
      </div>
      <div>
        {" "}
        <NewBarChart
          type="glass"
          title="Types of glasses"
          ytitle="Number of drinks"
          color="#f90000"
          thing="Glasses"
        />
      </div>
      <div>
        {" "}
        <NewBarChart
          type="users"
          title="Most active users"
          ytitle="Number of comments"
          color="#f90000"
          thing="Comments"
        />
      </div>
      <div>
        {" "}
        <NewBarChart
          type="commented"
          title="Most commented drinks"
          ytitle="Number of comments"
          color="#f90000"
          thing="Comments"
        />
      </div>
    </div>
  );
};

export default Stats;
