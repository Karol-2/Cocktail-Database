import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import Table from "../Table/Table";
import "../NewColChart/NewColChart.scss";

function NewPieChart(props) {
  const [type, setType] = useState([]);
  const [number, setNumber] = useState([]);
  const [fullData, setFullData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataReq = await fetch(`http://localhost:5000/stats/${props.type}`);
      const dataRes = await dataReq.json();

      const types = dataRes.map((data) => data.type);
      const numbers = dataRes.map((data) => data.number);
      setType(types);
      setNumber(numbers);
      setFullData(dataRes);
    };
    fetchData();
  }, []);
  return (
    <div className="main-graph">
      <div className="chart">
        <Chart
          type="pie"
          width={1000}
          height={500}
          series={number}
          options={{
            title: {
              text: props.title,
              style: { fontSize: 30 },
            },
            states: {
              hover: {
                filter: {
                  type: "none",
                },
              },
            },

            theme: { mode: "light" },
            labels: type,
          }}
        ></Chart>
      </div>
      <div className="table">
        <Table data={fullData} />
      </div>
    </div>
  );
}

export default NewPieChart;
