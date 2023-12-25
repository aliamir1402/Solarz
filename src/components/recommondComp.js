import React from "react";

export default function RecommondComp(props) {
  var Plant1_Cleaning = props.Plant1_Cleaning;
  var Plant1_Maintainance = props.Plant1_Maintainance;
  var Plant2_Cleaning = props.Plant2_Cleaning;
  var Plant2_Maintainance = props.Plant2_Maintainance;
  var i = 0;
  var PLC1 = [];
  var PLC2 = [];
  var PLM1 = [];
  var PLM2 = [];
  for (i = 0; i < Plant1_Cleaning.length; i++)
    PLC1.push(Plant1_Cleaning[i].Modules);
  i = 0;
  for (i = 0; i < Plant1_Maintainance.length; i++)
    PLM1.push(Plant1_Maintainance[i].Modules);
  i = 0;
  for (i = 0; i < Plant2_Cleaning.length; i++)
    PLC2.push(Plant2_Cleaning[i].Modules);
  i = 0;
  for (i = 0; i < Plant2_Maintainance.length; i++)
    PLM2.push(Plant2_Maintainance[i].Modules);

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
            {PLC1.length > 0 ? (
              PLC1.map((value, index) => (
                <div key={index} className="App-item SubSub-Section-Rec-1">
                  {value}
                </div>
              ))
            ) : (
              <div className="App-item SubSub-Section-Rec-1">No modules</div>
            )}
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
            {PLC2.length > 0 ? (
              PLC2.map((value, index) => (
                <div key={index} className="App-item SubSub-Section-Rec-1">
                  {value}
                </div>
              ))
            ) : (
              <div className="App-item SubSub-Section-Rec-1">No modules</div>
            )}
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
            {PLM1.length > 0 ? (
              PLM1.map((value, index) => (
                <div key={index} className="App-item SubSub-Section-Rec-1">
                  {value}
                </div>
              ))
            ) : (
              <div className="App-item SubSub-Section-Rec-1">No modules</div>
            )}
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
            {PLM2.length > 0 ? (
              PLM2.map((value, index) => (
                <div key={index} className="App-item SubSub-Section-Rec-1">
                  {value}
                </div>
              ))
            ) : (
              <div className="App-item SubSub-Section-Rec-1">No modules</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
