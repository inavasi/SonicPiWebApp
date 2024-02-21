import React from "react";
import "./App.css";

function Notes() {
  //View Box - shows last Notes played by the user
  return (
    <div className="Notes">
      <svg viewBox="110 40 500.9 450.3" width="150" height="150">
        <g className="Text">
          <text style={{ fontSize: 30 }} x="330" y="250">
            {" "}
            NOTES{" "}
          </text>
          <text style={{ fontSize: 25 }} x="280" y="280">
            {" "}
            you just played{" "}
          </text>
        </g>
        <g style={{ fill: "white", stroke: "black", strokeWidth: "0.5" }}>
          <rect x="200" y="300" width="370" height="200" />
          <text
            id="notetxt"
            x="235"
            y="450"
            style={{ fill: "#00BFFF", fontSize: 130 }}
          />
        </g>
      </svg>

      <br />
      <br />
    </div>
  );
}

export default Notes;