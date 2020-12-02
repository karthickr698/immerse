import React from "react";

import { Doughnut, Radar, Bar,HorizontalBar } from "react-chartjs-2";
//import "../../App.css";
import ChartData from "./Horizontal"

require("../../RoundedBars");

const Department = () => {

  const horizontalState = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: [
          "#B21F00",
          "#B21F00",
          "#B21F00",
          "#B21F00",
          "#B21F00"
        ],
        data: [65, 59, 80, 81, 56],
      },
      {
        label: "My second dataset",
        backgroundColor: [
          "#C9DE00",
          "#C9DE00",
          "#C9DE00",
          "#C9DE00",
          "#C9DE00"
        ],
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        //stack: 1,
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [45, 79, 50, 41, 16, 85, 20],
      },
    ],
  };

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
    labels: ["Anatomy", "Purpose", "Mastery", "Wellbeing", "Trust"],
    datasets: [
      {
        barThickness: 40,
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
        backgroundColor: ["#147AD6", "#79D2DE", "#EC6666"],
        data: [35.84, 28.49, 35.67],
      },
    ],
  };
  return (
    <>
      <ChartData />
      <h3 style={{ color: "#707070" }}>Overall Immersion</h3>
      <div className="overAllChartCont">
        <div className="barChartHolder">
          <Radar
            data={stateRadar}
            options={{
              title: {
                display: true,
                text: "Drivers",
                fontSize: 16,
              },
              legend: {
                display: false,
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
                text: "Contribution",
                fontSize: 16,
              },
              legend: {
                display: false
              },
            }}
          />
        </div>
      </div>
      {/* <div
        style={{
          width: "95%",
          padding: "15px",
          borderRadius: "10px",
          backgroundColor: "#fff",
          margin: "auto",
        }}
      > */}
        <HorizontalBar
          data={horizontalState}
          options={{
            title: {
              display: true,
              text: "Comparison of Impact",
              fontSize: 16,
            },
            legend: {
              display: true,
              position: "top",
            },
          }}
        />
      {/* </div> */}
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
          <div style={{width:"100%"}}>
            <Doughnut
              data={stateSelf}
              options={{
                title: {
                  display: true,
                  text: "Self Determination",
                  fontSize: 16,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
          <div style={{width:"100%"}}>
            <Doughnut
              data={stateSelf}
              options={{
                title: {
                  display: true,
                  text: "Flow",
                  fontSize: 16,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
        {/* <div className="barChartHolder">
          <Doughnut
            data={stateSelf}
            options={{
              title: {
                display: true,
                text: "Flow",
                fontSize: 16,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div> */}
      </div>
    </>
  );
};

export default Department;
