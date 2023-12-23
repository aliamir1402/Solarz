import React from "react";

export default function FutureStats(props) {
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
            28<span className="SubText-2"> K Units</span>
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
            28<span className="SubText-2"> K Units</span>
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
            28<span className="SubText-2"> K Units</span>
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
            28<span className="SubText-2"> K Units</span>
          </span>
        </div>
      </div>
    </>
  );
}
