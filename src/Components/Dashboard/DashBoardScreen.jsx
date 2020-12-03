import React from "react";
import { Doughnut, Radar, Bar } from "react-chartjs-2";
import "../../App.css"
import {HorizontalBar} from 'react-chartjs-2';

require ('../../RoundedBars.js')

const state = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
}

const dashBoardScreen = ({ averageValue }) => {
    return(
        <>
            <div class="dash-cont">
                <div>
                    Immersion Score - Department
                    <div>
                        80
                    </div>
                </div>
                <div>
                    Immersion Score - Benchmark
                    <div>
                        84
                    </div>
                </div>
            </div>
            <HorizontalBar data={state} />
        </>
    )
}

export default dashBoardScreen;