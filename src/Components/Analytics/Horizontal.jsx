import React from "react";
import { Pie, Doughnut, Radar, Bar, HorizontalBar } from "react-chartjs-2";

const ChartData = ({ averageValue }) => {
  const state = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: [65, 59, 80, 81, 56],
      },
    ],
  };
  const horizontalState = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Rainfall",
        // backgroundColor: [
        //   "#B21F00",
        //   "#C9DE00",
        //   "#2FDE00",
        //   "#00A6B4",
        //   "#6800B4",
        // ],
        // hoverBackgroundColor: [
        //   "#501800",
        //   "#4B5000",
        //   "#175000",
        //   "#003350",
        //   "#35014F",
        // ],
        data: [65, 59, 80, 81, 56],
      },
      {
        label: "My second dataset",
        // backgroundColor: [
        //   "#C9DE00",
        //   "#B21F00",
        //   "#00A6B4",
        //   "#2FDE00",
        //   "#6800B4",
        // ],
        // hoverBackgroundColor: [
        //   "#501800",
        //   "#4B5000",
        //   "#175000",
        //   "#003350",
        //   "#35014F",
        // ],
        //borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        //stack: 1,
        //hoverBorderColor: "rgba(255,99,132,1)",
        data: [45, 79, 50, 41, 16, 85, 20],
      },
    ],
  };

  return (
    <div>
      <Pie
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />

      <HorizontalBar
        data={horizontalState}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          scales: {
            xAxes: [{
              display: true,
              ticks: {
                min: 0
              }
            }],
            yAxes: [{
              display: true
            }],
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />

      <Doughnut
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
      <Radar
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};

export default ChartData;