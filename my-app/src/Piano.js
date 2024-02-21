import React from "react";
import "./App.css";
import WebMidi from "webmidi";

function Piano() {
  //Output array to Midi Port (please rename if you use another Port Name)
  var output = WebMidi.getOutputByName("loopMIDI Port");
  output = WebMidi.outputs[0];
  
  /*
  * Piano Keys Svg 
  * Mouse event functions - send matching note on channel 1, when clicked
  * show last note sent in the Notes Svg 
  */
  return (   
    <div className="Piano">
      <svg viewBox="0 0 1000.9 50.3">
        <g className="Text">
          <text style={{ fontSize: 30 }} x="450" y="50">
            {" "}
            PIANO{" "}
          </text>
        </g>
      </svg>
      <svg className="PianoSvg" viewBox="-30 100 900.9 200.3">
        <title> Piano </title>	
        <g id="all" style={{ fill: "#F0F8FF", stroke: "#F0FFFF" }}>
          {/*c3*/}
          <rect
            x="0"
            y="110"
            width="40"
            height="150"
            id="c3"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("C3", 1);
              document.getElementById("c3").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "C3";
              console.log("Piano C3");
            }}
            onMouseUp={() =>
              (document.getElementById("c3").style.fill = "#F0F8FF")
            }
          />
          {/*d3*/}
          <rect
            x="40"
            y="110"
            width="40"
            height="150"
            id="d3"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("D3", 1);
              document.getElementById("d3").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "D3";
              console.log("Piano D3");
            }}
            onMouseUp={() =>
              (document.getElementById("d3").style.fill = "#F0F8FF")
            }
          />
          {/*e3*/}
          <rect
            x="80"
            y="110"
            width="40"
            height="150"
            id="e3"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("E3", 1);
              document.getElementById("e3").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "E3";
              console.log("Piano E3");
            }}
            onMouseUp={() =>
              (document.getElementById("e3").style.fill = "#F0F8FF")
            }
          />
          {/*f3*/}
          <rect
            x="120"
            y="110"
            width="40"
            height="150"
            id="f3"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("F3", 1);
              document.getElementById("f3").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "F3";
              console.log("Piano F3");
            }}
            onMouseUp={() =>
              (document.getElementById("f3").style.fill = "#F0F8FF")
            }
          />
          {/*g3*/}
          <rect
            x="160"
            y="110"
            width="40"
            height="150"
            id="g3"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("G3", 1);
              document.getElementById("g3").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "G3";
              console.log("Piano G3");
            }}
            onMouseUp={() =>
              (document.getElementById("g3").style.fill = "#F0F8FF")
            }
          />
          {/*a3*/}
          <rect
            x="200"
            y="110"
            width="40"
            height="150"
            id="a3"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("A3", 1);
              document.getElementById("a3").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "A3";
              console.log("Piano A3");
            }}
            onMouseUp={() =>
              (document.getElementById("a3").style.fill = "#F0F8FF")
            }
          />
          {/*b3*/}
          <rect
            x="240"
            y="110"
            width="40"
            height="150"
            id="b3"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("B3", 1);
              document.getElementById("b3").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "B3";
              console.log("Piano B3");
            }}
            onMouseUp={() =>
              (document.getElementById("b3").style.fill = "#F0F8FF")
            }
          />
          {/*c4*/}
          <rect
            x="280"
            y="110"
            width="40"
            height="150"
            id="c4"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("C4", 1);
              document.getElementById("c4").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "C4";
              console.log("Piano C4");
            }}
            onMouseUp={() =>
              (document.getElementById("c4").style.fill = "#F0F8FF")
            }
          />
          {/*d4*/}
          <rect
            x="320"
            y="110"
            width="40"
            height="150"
            id="d4"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("D4", 1);
              document.getElementById("d4").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "D4";
              console.log("Piano D4");
            }}
            onMouseUp={() =>
              (document.getElementById("d4").style.fill = "#F0F8FF")
            }
          />
          {/*e4*/}
          <rect
            x="360"
            y="110"
            width="40"
            height="150"
            id="e4"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("E4", 1);
              document.getElementById("e4").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "E4";
              console.log("Piano E4");
            }}
            onMouseUp={() =>
              (document.getElementById("e4").style.fill = "#F0F8FF")
            }
          />
          {/*f4*/}
          <rect
            x="400"
            y="110"
            width="40"
            height="150"
            id="f4"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("F4", 1);
              document.getElementById("f4").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "F4";
              console.log("Piano F4");
            }}
            onMouseUp={() =>
              (document.getElementById("f4").style.fill = "#F0F8FF")
            }
          />
          {/*g4*/}
          <rect
            x="440"
            y="110"
            width="40"
            height="150"
            id="g4"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("G4", 1);
              document.getElementById("g4").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "G4";
              console.log("Piano G4");
            }}
            onMouseUp={() =>
              (document.getElementById("g4").style.fill = "#F0F8FF")
            }
          />
          {/*a4*/}
          <rect
            x="480"
            y="110"
            width="40"
            height="150"
            id="a4"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("A4", 1);
              document.getElementById("a4").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "A4";
              console.log("Piano A4");
            }}
            onMouseUp={() =>
              (document.getElementById("a4").style.fill = "#F0F8FF")
            }
          />
          {/*b4*/}
          <rect
            x="520"
            y="110"
            width="40"
            height="150"
            id="b4"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("B4", 1);
              document.getElementById("b4").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "B4";
              console.log("Piano B4");
            }}
            onMouseUp={() =>
              (document.getElementById("b4").style.fill = "#F0F8FF")
            }
          />
          {/*c5*/}
          <rect
            x="560"
            y="110"
            width="40"
            height="150"
            id="c5"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("C5", 1);
              document.getElementById("c5").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "C5";
              console.log("Piano C5");
            }}
            onMouseUp={() =>
              (document.getElementById("c5").style.fill = "#F0F8FF")
            }
          />
          {/*d5*/}
          <rect
            x="600"
            y="110"
            width="40"
            height="150"
            id="d5"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("D5", 1);
              document.getElementById("d5").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "D5";
              console.log("Piano D5");
            }}
            onMouseUp={() =>
              (document.getElementById("d5").style.fill = "#F0F8FF")
            }
          />
          {/*e5*/}
          <rect
            x="640"
            y="110"
            width="40"
            height="150"
            id="e5"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("E5", 1);
              document.getElementById("e5").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "E5";
              console.log("Piano E5");
            }}
            onMouseUp={() =>
              (document.getElementById("e5").style.fill = "#F0F8FF")
            }
          />
          {/*f5*/}
          <rect
            x="680"
            y="110"
            width="40"
            height="150"
            id="f5"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("F5", 1);
              document.getElementById("f5").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "F5";
              console.log("Piano F5");
            }}
            onMouseUp={() =>
              (document.getElementById("f5").style.fill = "#F0F8FF")
            }
          />
          {/*g5*/}
          <rect
            x="720"
            y="110"
            width="40"
            height="150"
            id="g5"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("G5", 1);
              document.getElementById("g5").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "G5";
              console.log("Piano G5");
            }}
            onMouseUp={() =>
              (document.getElementById("g5").style.fill = "#F0F8FF")
            }
          />
          {/*a5*/}
          <rect
            x="760"
            y="110"
            width="40"
            height="150"
            id="a5"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("A5", 1);
              document.getElementById("a5").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "A5";
              console.log("Piano A5");
            }}
            onMouseUp={() =>
              (document.getElementById("a5").style.fill = "#F0F8FF")
            }
          />
          {/*b5*/}
          <rect
            x="800"
            y="110"
            width="40"
            height="150"
            id="b5"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("B5", 1);
              document.getElementById("b5").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "B5";
              console.log("Piano B5");
            }}
            onMouseUp={() =>
              (document.getElementById("b5").style.fill = "#F0F8FF")
            }
          />
        </g>
        <g style={{ fill: "black" }}>
          {/*Db3*/}
          <rect
            x="30"
            y="110"
            width="20"
            height="90"
            id="db3"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("Db3", 1);
              document.getElementById("db3").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "Db3";
              console.log("Piano Db3");
            }}
            onMouseUp={() =>
              (document.getElementById("db3").style.fill = "black")
            }
          />
          {/*Eb3*/}
          <rect
            x="70"
            y="110"
            width="20"
            height="90"
            id="eb3"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("Eb3", 1);
              document.getElementById("eb3").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "Eb3";
              console.log("Piano Eb3");
            }}
            onMouseUp={() =>
              (document.getElementById("eb3").style.fill = "black")
            }
          />

          {/*Gb3*/}
          <rect
            x="150"
            y="110"
            width="20"
            height="90"
            id="gb3"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("Gb3", 1);
              document.getElementById("gb3").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "Gb3";
              console.log("Piano Gb3");
            }}
            onMouseUp={() =>
              (document.getElementById("gb3").style.fill = "black")
            }
          />
          {/*Ab3*/}
          <rect
            x="190"
            y="110"
            width="20"
            height="90"
            id="ab3"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("Ab3", 1);
              document.getElementById("ab3").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "Ab3";
              console.log("Piano Ab3");
            }}
            onMouseUp={() =>
              (document.getElementById("ab3").style.fill = "black")
            }
          />
          {/*Bb3*/}
          <rect
            x="230"
            y="110"
            width="20"
            height="90"
            id="bb3"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("Bb3", 1);
              document.getElementById("bb3").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "Bb3";
              console.log("Piano Bb3");
            }}
            onMouseUp={() =>
              (document.getElementById("bb3").style.fill = "black")
            }
          />

          {/*Db4*/}
          <rect
            x="310"
            y="110"
            width="20"
            height="90"
            id="db4"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("Db4", 1);
              document.getElementById("db4").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "Db4";
              console.log("Piano Db4");
            }}
            onMouseUp={() =>
              (document.getElementById("db4").style.fill = "black")
            }
          />
          {/*Eb4*/}
          <rect
            x="350"
            y="110"
            width="20"
            height="90"
            id="eb4"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("Eb4", 1);
              document.getElementById("eb4").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "Eb4";
              console.log("Piano Eb4");
            }}
            onMouseUp={() =>
              (document.getElementById("eb4").style.fill = "black")
            }
          />

          {/*Gb4*/}
          <rect
            x="430"
            y="110"
            width="20"
            height="90"
            id="gb4"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("Gb4", 1);
              document.getElementById("gb4").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "Gb4";
              console.log("Piano Gb4");
            }}
            onMouseUp={() =>
              (document.getElementById("gb4").style.fill = "black")
            }
          />
          {/*Ab4*/}
          <rect
            x="470"
            y="110"
            width="20"
            height="90"
            id="ab4"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("Ab4", 1);
              document.getElementById("ab4").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "Ab4";
              console.log("Piano Ab4");
            }}
            onMouseUp={() =>
              (document.getElementById("ab4").style.fill = "black")
            }
          />
          {/*Bb4*/}
          <rect
            x="510"
            y="110"
            width="20"
            height="90"
            id="bb4"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("Bb4", 1);
              document.getElementById("bb4").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "Bb4";
              console.log("Piano Bb4");
            }}
            onMouseUp={() =>
              (document.getElementById("bb4").style.fill = "black")
            }
          />

          {/*Db5*/}
          <rect
            x="590"
            y="110"
            width="20"
            height="90"
            id="db5"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("Db5", 1);
              document.getElementById("db5").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "Db5";
              console.log("Piano Db5");
            }}
            onMouseUp={() =>
              (document.getElementById("db5").style.fill = "black")
            }
          />
          {/*Eb5*/}
          <rect
            x="630"
            y="110"
            width="20"
            height="90"
            id="eb5"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("Eb5", 1);
              document.getElementById("eb5").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "Eb5";
              console.log("Piano Eb5");
            }}
            onMouseUp={() =>
              (document.getElementById("eb5").style.fill = "black")
            }
          />

          {/*Gb5*/}
          <rect
            x="710"
            y="110"
            width="20"
            height="90"
            id="gb5"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("Gb5", 1);
              document.getElementById("gb5").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "Gb5";
              console.log("Piano Gb5");
            }}
            onMouseUp={() =>
              (document.getElementById("gb5").style.fill = "black")
            }
          />
          {/*Ab5*/}
          <rect
            x="750"
            y="110"
            width="20"
            height="90"
            id="ab5"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("Ab5", 1);
              document.getElementById("ab5").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "Ab5";
              console.log("Piano Ab5");
            }}
            onMouseUp={() =>
              (document.getElementById("ab5").style.fill = "black")
            }
          />
          {/*Bb5*/}
          <rect
            x="790"
            y="110"
            width="20"
            height="90"
            id="bb5"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("Bb5", 1);
              document.getElementById("bb5").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = "Bb5";
              console.log("Piano Bb5");
            }}
            onMouseUp={() =>
              (document.getElementById("bb5").style.fill = "black")
            }
          />
        </g>
        <g style={{ fill: "#B0C4DE" }}>
          {/*c*/}
          <text x="15" y="252">
            c3
          </text>
          {/*d*/}
          <text x="55" y="252">
            d3
          </text>
          {/*e*/}
          <text x="95" y="252">
            e3
          </text>
          {/*f*/}
          <text x="135" y="252">
            f3
          </text>
          {/*g*/}
          <text x="175" y="252">
            g3
          </text>
          {/*a*/}
          <text x="215" y="252">
            a3
          </text>
          {/*b*/}
          <text x="255" y="252">
            b3
          </text>
          {/*c*/}
          <text x="295" y="252">
            c4
          </text>
          {/*d*/}
          <text x="335" y="252">
            d4
          </text>
          {/*e*/}
          <text x="375" y="252">
            e4
          </text>
          {/*f*/}
          <text x="415" y="252">
            f4
          </text>
          {/*g*/}
          <text x="455" y="252">
            g4
          </text>
          {/*a*/}
          <text x="495" y="252">
            a4
          </text>
          {/*b*/}
          <text x="535" y="252">
            b4
          </text>
          {/*c*/}
          <text x="575" y="252">
            c5
          </text>
          {/*d*/}
          <text x="615" y="252">
            d5
          </text>
          {/*e*/}
          <text x="655" y="252">
            e5
          </text>
          {/*f*/}
          <text x="695" y="252">
            f5
          </text>
          {/*g*/}
          <text x="735" y="252">
            g5
          </text>
          {/*a*/}
          <text x="775" y="252">
            a5
          </text>
          {/*b*/}
          <text x="815" y="252">
            b5
          </text>
        </g>
      </svg>
    </div>
  );
}

export default Piano;