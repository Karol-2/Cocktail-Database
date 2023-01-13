import React from "react";
import NewBarChart from "../../components/NewBarChart/NewBarChart";
import NewPieChart from "../../components/NewPieChart/NewPieChart";

const Stats = () => {
  return (
    <div>
      <h1>Stats</h1>
      <div>
        {" "}
        <NewPieChart
          type="alco"
          title="Types of drinks"
          ytitle="Number of drinks"
          thing="Drinks"
        />
      </div>
      <div>
        {" "}
        <NewBarChart
          type="commented"
          title="Most commented drinks"
          ytitle="Number of comments"
          thing="Comments"
        />
      </div>
      <div>
        {" "}
        <NewPieChart
          type="glass"
          title="Types of glasses"
          ytitle="Number of drinks"
          thing="Glasses"
        />
      </div>
      <div>
        {" "}
        <NewBarChart
          type="users"
          title="Most active users"
          ytitle="Number of comments"
          thing="Comments"
        />
      </div>
    </div>
  );
};

export default Stats;
