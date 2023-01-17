import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import Table from "../Table/Table";
import "./NewColChart.scss";

function NewColChart(props) {
  const [type, setType] = useState([]);
  const [number, setNumber] = useState([]);
  const [fullData, setFullData] = useState([]);

  function addMissingType(array) {
    const types = ["Optional alcohol", "Non alcoholic", "Alcoholic"];

    let missingTypes = types.filter(
      (type) => !array.some((el) => el.type === type)
    );
    let newArr = array.concat(
      missingTypes.map((type) => ({ type, number: 0 }))
    );
    return newArr;
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataReq = await fetch(
          `http://localhost:5000/stats/${props.type}`
        );
        const dataRes = await dataReq.json();
        const types = dataRes.map((data) => data.type);
        const numbers = dataRes.map((data) => data.number);
        setType(types);
        setNumber(numbers);
        setFullData(dataRes);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
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
            states: {
              hover: {
                filter: {
                  type: "none",
                },
              },
            },

            theme: { mode: "light" },

            xaxis: {
              categories: type,
            },

            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "15", colors: "#434242" },
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

export default NewColChart;
