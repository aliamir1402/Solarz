import React from "react";
import AreaLineGraph from "./areaChart.js";


export default function Plant1DataAnalytics() {
  return (
    <div className="bor App-container Sub-Content-1">
      <div className="bor App-item">
        <AreaLineGraph title="Plant 1 Power Generation"></AreaLineGraph>
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
              12:14<span className="SubText-2"> PM</span>
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
              5.32<span className="SubText-2"> M Units</span>
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
              283<span className="SubText-2"> K Units</span>
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
              28<span className="SubText-2"> K Units</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
