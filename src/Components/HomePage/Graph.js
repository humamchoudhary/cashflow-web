import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const options = {
  responsive: true,
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  legend: {
    display: true,
    position: "bottom",
    labels: {
      fontColor: "#FFF",
      usePointStyle: true,
    },
  },
};

const AreaGraph = ({data}) => <Line data={data} options={options} height={60} />;

export default AreaGraph;
