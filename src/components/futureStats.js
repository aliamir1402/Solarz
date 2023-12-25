import React from "react";
import AreaChart from "./areaChart.js";

export default function FutureStats(props) {
  var x = [],
    y = [];
  var NextDay = 0,
    Day7 = 0,
    Day15 = 0,
    Day30 = 0;
  var FutureEstimations = props.FutureEstimations;
  for (var j = 0; j < FutureEstimations.length; j++) {
    x.push(FutureEstimations[j].Date);
    y.push(FutureEstimations[j].Daily_Gen);
  }
  NextDay = FutureEstimations[0].Daily_Gen;
  for (var i = 0; i < FutureEstimations.length; i++) {
    if (i < 8) Day7 = Day7 + parseFloat(FutureEstimations[i].Daily_Gen);
    if (i < 16) Day15 = Day15 + parseFloat(FutureEstimations[i].Daily_Gen);
    if (i < 31) Day30 = Day30 + parseFloat(FutureEstimations[i].Daily_Gen);
  }
  return (
    <>
      <div className="App-container pl-12 pr-12">
        <div className="bor App-item SubSub-Content-2">
          <span style={{ paddingLeft: "10px" }}>Next Days Output</span>
          <hr
            style={{
              border: "none",
              borderBottom: "2px solid white",
              padding: "5px",
            }}
          />
          <span className="SubText-1">
            {(NextDay / 1000).toFixed(1)}
            <span className="SubText-2"> K Units</span>
          </span>
        </div>
        <div className="bor App-item SubSub-Content-3">
          <span style={{ paddingLeft: "10px" }}>Next 7 Days Output</span>
          <hr
            style={{
              border: "none",
              borderBottom: "2px solid white",
              padding: "5px",
            }}
          />
          <span className="SubText-1">
            {(Day7 / 1000).toFixed(1)}
            <span className="SubText-2"> K Units</span>
          </span>
        </div>
        <div className="bor App-item SubSub-Content-4">
          <span style={{ paddingLeft: "10px" }}>Next 15 Days Output</span>
          <hr
            style={{
              border: "none",
              borderBottom: "2px solid white",
              padding: "5px",
            }}
          />
          <span className="SubText-1">
            {(Day15 / 1000000).toFixed(1)}
            <span className="SubText-2"> M Units</span>
          </span>
        </div>
        <div className="bor App-item SubSub-Content-1">
          <span style={{ paddingLeft: "10px" }}>Next 30 Days Output</span>
          <hr
            style={{
              border: "none",
              borderBottom: "2px solid white",
              padding: "5px",
            }}
          />
          <span className="SubText-1">
            {(Day30 /1000000).toFixed(1)}
            <span className="SubText-2"> M Units</span>
          </span>
        </div>
      </div>
      <div className="App-container bor">
        <div className="App-item bor ml-16">
          <AreaChart title="Future Daily Generation" x={x} y={y}></AreaChart>
        </div>
      </div>
    </>
  );
}
