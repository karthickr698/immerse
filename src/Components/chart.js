import React from "react";
import { Doughnut, Radar, Bar } from "react-chartjs-2";
import "../App.css";

require ('../RoundedBars.js')

const chart = ({ averageValue }) => {
  const stateRadar = {
    labels: ["Purpose","Anatomy", "Trust", "Wellbeing", "Mastery"],
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
        data: [1.0, 1.2, 0.8, 1.2, 1.0],
      },
    ],
  };
  const stateBar = {
    labels: ["Anatomy","Purpose", "Mastery", "Wellbeing", "Trust"],
    datasets: [
      {
        barThickness: 70,
        backgroundColor: [
          "#EE2326",
          "#EE2326",
          "#EE2326",
          "#EE2326",
          "#EE2326",
        ],
        data: [1.0, 0.6, 0.8, 1.2, 1.0],
      },
    ],
  };
  const stateSelf = {
    labels: ["Mastery", "Anatomy", "Purpose"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: [
          "#147AD6",
          "#79D2DE",
          "#EC6666"
        ],
        data: [35.84,28.49,35.67],
      },
    ],
  };
  const state = {
    labels: ["Wellbeing", "Trust", "Work Challenge"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: [
          "#005284",
          "#EE2326",
          "#009DAE"
        ],
        data: [65, 59, 80],
      },
    ],
  };
  const horizontalState = {
    labels: ["Anatomy","Purpose", "Mastery", "Wellbeing", "Trust"],
    datasets: [
      {
        barThickness: 40,
        backgroundColor: [
          "#005284",
          "#005284",
          "#005284",
          "#005284",
          "#005284",
        ],
        data: [45, 41, 16, 79, 50,],
      },
      {
        barThickness: 40,
        backgroundColor: [
          "#EE2326",
          "#EE2326",
          "#EE2326",
          "#EE2326",
          "#EE2326",
        ],
        data: [45, 79, 50, 41, 16],
      },
    ],
  };

  return (
    <div>
      <div className="top">
        <Radar
          data={stateRadar}
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
          data={stateBar}
          options={{
            cornerRadius: 10,
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

      <Bar
        data={horizontalState}
        options={{
          cornerRadius: 10,
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

      <Doughnut
        data={stateSelf}
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
    </div>
  );
};

export default chart;
