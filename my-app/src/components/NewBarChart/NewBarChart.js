import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import Table from "../Table/Table";
import "./NewBarChart.scss";

function NewBarChart(props) {
  const [type, setType] = useState([]);
  const [number, setNumber] = useState([]);
  const [fullData, setFullData] = useState([]);

  useEffect(() => {
    const getSocialrecord = async () => {
      const dataReq = await fetch(`http://localhost:5000/stats/${props.type}`);
      const dataRes = await dataReq.json();

      const types = dataRes.map((data) => data.type);
      const numbers = dataRes.map((data) => data.number);
      setType(types);
      setNumber(numbers);
      setFullData(dataRes);
    };
    getSocialrecord();
  }, []);
  return (
    <div className="main-graph">
      <div className="chart">
        <Chart
          type="bar"
          width={1000}
          height={500}
          series={[
            {
              name: props.thing,
              data: number,
            },
          ]}
          options={{
            title: {
              text: props.title,
              style: { fontSize: 30 },
            },

            colors: [props.color],
            theme: { mode: "light" },

            xaxis: {
              categories: type,
            },

            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "15", colors: [props.color] },
              },
              title: {
                text: props.ytitle,
                style: { color: props, fontSize: 15 },
              },
            },

            legend: {
              show: true,
              position: "right",
            },

            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: {
                colors: ["#f4f4f4"],
                fontSize: 15,
              },
            },
          }}
        ></Chart>
      </div>
      <div className="table">
        <Table data={fullData} />
      </div>
    </div>
  );
}

export default NewBarChart;
