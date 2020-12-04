import React from "react";
import { Doughnut, Radar, Bar } from "react-chartjs-2";
import "../../App.css"
import {HorizontalBar} from 'react-chartjs-2';

require ('../../RoundedBars.js')

const stateBar = {
    labels: ["Anatomy","Purpose", "Mastery", "Wellbeing", "Trust"],
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

const dashBoardScreen = ({ averageValue }) => {
    return(
        <div>
            <div class="dash-cont">
                <div>
                    Immersion Score - Department
                    <div class="number">
                        80
                    </div>
                </div>
                <div>
                    Immersion Score - Benchmark
                    <div class="number">
                        84
                    </div>
                </div>
            </div>
            <div class="dash">
                Factors
                <div class="dash-mid">
                    <div>
                        <Bar
                            class="bar-chart"
                            data={stateBar}
                            options={{
                                cornerRadius: 10,
                                    title: {
                                    display: true,
                                    text: "Average Rainfall per month",
                                    fontSize: 20,
                                },
                                legend: {
                                    display: false,
                                },
                            }}
                        />
                    </div>
                    
                    <div>
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
                                    display: false,
                                },
                            }}
                        />
                    </div>
                    <div>
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
                                    display: false,
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default dashBoardScreen;