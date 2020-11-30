import React from "react";

import { Doughnut, Radar, Bar } from "react-chartjs-2";
import "../../App.css";

require("../../RoundedBars");

const Department = () => {
  const stateBar = {
    labels: ["Anatomy", "Purpose", "Mastery", "Wellbeing", "Trust"],
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
        hoverBackgroundColor: [
          "#EC6666",
          "#EC6666",
          "#EC6666",
          "#EC6666",
          "#EC6666",
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
        backgroundColor: ["#147AD6", "#79D2DE", "#EC6666"],
        hoverBackgroundColor: ["#501800", "#4B5000", "#175000"],
        data: [35.84, 28.49, 35.67],
      },
    ],
  };
  return (
    <>
      <h3 style={{ color: "#707070" }}>Overall Immersion</h3>
      <div className="overAllChartCont">
        <div className="barChartHolder">
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
        <div className="barChartHolder">
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
      </div>
      <h3 style={{ color: "#707070", marginTop: "80px" }}>
        Comparison of Impact
      </h3>
      <div
        style={{
          width: "95%",
          padding: "15px",
          borderRadius: "10px",
          backgroundColor: "#fff",
          margin: "auto",
        }}
      >
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
      <h3 style={{ color: "#707070", marginTop: "80px" }}>Immersion</h3>
      <div
        style={{
          padding: "15px",
          borderRadius: "10px",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div className="barChartHolder">
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
        </div>
        <div className="barChartHolder">
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
        </div>
      </div>
    </>
  );
};

export default Department;
