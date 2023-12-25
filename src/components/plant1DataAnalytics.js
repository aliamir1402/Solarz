import React from "react";
import AreaLineGraph from "./areaChart.js";

export default function Plant1DataAnalytics(props) {
  var Module = props.Module;
  var Metrics = props.Metrics;
  var DailyGen = props.DailyGen;
  var AvgTime, AvgDailyGen, MaxGen, MinGen, MaxDate, MinDate;
  var x = [],
    y = [];

  for (var i = 0; i < Metrics.length; i++) {
    if (Metrics[i].ID === Module) {
      AvgTime = Metrics[i].Time;
      AvgDailyGen = Math.round(Metrics[i].Average_Gen / 1000);
      MaxGen = Math.round(Metrics[i].Max_Gen / 1000);
      MinGen = Math.round(Metrics[i].Min_Gen / 1000);
      MaxDate = Metrics[i].Max_Date;
      MinDate = Metrics[i].Min_Date;
      break;
    }
  }
  for (var j = 0; j < DailyGen.length; j++) {
    x.push(DailyGen[j].Date);
    y.push(DailyGen[j].Daily_Generation_Plant1);
  }

  return (
    <div className="bor App-container Sub-Content-1">
      <div className="bor App-item">
        <AreaLineGraph
          title="Plant 1 Power Generation"
          x={x}
          y={y}
        ></AreaLineGraph>
      </div>
      <div className="bor App-item">
        <div className="bor App-container">
          <div className="bor App-item SubSub-Content-1">
            <span style={{ paddingLeft: "10px" }}>
              Avg Time Of Highest Generation
            </span>
            <hr
              style={{
                border: "none",
                borderBottom: "2px solid white",
                padding: "5px",
              }}
            />
            <span className="SubText-1">
              {AvgTime}
              <span className="SubText-2"></span>
            </span>
          </div>
          <div className="bor App-item SubSub-Content-2">
            <span style={{ paddingLeft: "10px" }}>Avg Daily Generation</span>
            <hr
              style={{
                border: "none",
                borderBottom: "2px solid white",
                padding: "5px",
              }}
            />
            <span className="SubText-1">
              {AvgDailyGen}
              <span className="SubText-2"> K Units</span>
            </span>
          </div>
        </div>
        <div className="bor App-container">
          <div className="bor App-item SubSub-Content-3">
            <span style={{ paddingLeft: "10px" }}>
              Module Maximum Generation
            </span>
            <hr
              style={{
                border: "none",
                borderBottom: "2px solid white",
                padding: "5px",
              }}
            />
            <span className="SubText-1">
              {MaxGen}
              <span className="SubText-2"> K Units </span>
              <span className="SubText-3">{MaxDate}</span>
            </span>
          </div>
          <div className="bor App-item SubSub-Content-4">
            <span style={{ paddingLeft: "10px" }}>
              Module Minimum Generation
            </span>
            <hr
              style={{
                border: "none",
                borderBottom: "2px solid white",
                padding: "5px",
              }}
            />
            <span className="SubText-1">
              {MinGen}
              <span className="SubText-2"> K Units </span>
              <span className="SubText-3">{MinDate}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
