import React from "react";

export default function RecommondComp() {
  return (
    <>
      <div className="App-container ml-12 bor Section-Rec-Size-Adjust">
        <div className="bor App-item Sub-Section-Rec-1">
          <div className="pl-4 text-base">
            Plant 1 Modules Cleaning Requirement
          </div>
          <hr
            style={{
              border: "none",
              borderBottom: "2px solid white",
              padding: "5px",
            }}
          />
          <div className="App-container App-item">
            <div className="App-item SubSub-Section-Rec-1">A1</div>
            <div className="App-item SubSub-Section-Rec-1">A1</div>
          </div>
          <div className="pl-4 text-base">
            Plant 2 Modules Cleaning Requirement
          </div>
          <hr
            style={{
              border: "none",
              borderBottom: "2px solid white",
              padding: "5px",
            }}
          />
          <div className="App-container App-item">
            <div className="App-item SubSub-Section-Rec-1">A2</div>
            <div className="App-item SubSub-Section-Rec-1">A2</div>
            <div className="App-item SubSub-Section-Rec-1">A2</div>
            <div className="App-item SubSub-Section-Rec-1">A2</div>
          </div>
        </div>
        <div className="bor App-item Sub-Section-Rec-1">
          <div className="pl-4 text-base">
            Plant 1 Modules Maintenance Requirement
          </div>
          <hr
            style={{
              border: "none",
              borderBottom: "2px solid white",
              padding: "5px",
            }}
          />
          <div className="App-container App-item">
            <div className="App-item SubSub-Section-Rec-1">A1</div>
            <div className="App-item SubSub-Section-Rec-1">A1</div>
            <div className="App-item SubSub-Section-Rec-1">A1</div>
            <div className="App-item SubSub-Section-Rec-1">A1</div>
          </div>
          <div className="pl-4 text-base">
            Plant 2 Modules Maintenance Requirement
          </div>
          <hr
            style={{
              border: "none",
              borderBottom: "2px solid white",
              padding: "5px",
            }}
          />
          <div className="App-container App-item">
            <div className="App-item SubSub-Section-Rec-1">A2</div>
          </div>
        </div>
      </div>
    </>
  );
}
