import React from "react";
import NewColChart from "../../components/NewColChart/NewColChart";
import NewPieChart from "../../components/NewPieChart/NewPieChart";

const Stats = () => {
  return (
    <div>
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
        <NewColChart
          type="commented"
          title="Most commented drinks"
          ytitle="Number of comments"
          thing="Comments"
        />
      </div>
      <div>
        {" "}
        <NewColChart
          type="thebest"
          title="Drinks with the best reviews"
          ytitle="Average of reviews"
          thing="Average"
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
        <NewColChart
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
