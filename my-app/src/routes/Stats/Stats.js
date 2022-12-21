import React, { useState } from "react";
import BarChart from "../../components/BarChart/BarChart";
import { UserData } from "../../chart-mock-data";

const Stats = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
      },
    ],
  });

  return (
    <div>
      <h1>Stats</h1>
      <ul>
        <li>alkoholowe / nie</li>
        <li>rodzaje szklanek</li>
        <li>ilość wykorzystania każdego ze składników</li>
        <li>najbardziej komentowane drinki</li>
        <li>
          <b>do kazdego z nich tabela</b>
        </li>
      </ul>
      <div style={{ width: 600 }}>
        <BarChart chartData={userData} />
      </div>
    </div>
  );
};

export default Stats;
