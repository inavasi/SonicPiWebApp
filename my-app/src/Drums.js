import React, { useEffect } from "react";
import WebMidi from "webmidi";
import "./App.css";

function Drums() {
  //Output array to Midi Port named loopMIDI Port (please rename if you use another Port Name)
  var output = WebMidi.getOutputByName("loopMIDI Port");
  output = WebMidi.outputs[0];

  //send different Notes to handle what drum sample is being played in sonic pi on channel 2
  const noteHiHat = "B5"; //note 83
  const noteMidTom = "E5"; //note 76
  const noteSnareDrum = "D5"; //note 74
  const noteBassDrum = "Ab5"; //note 80
  const noteFloorTom = "F5"; //note 77
  const noteRideCymbal = "G5"; //note 79
  const noteHighTom = "C5"; //note 72
  const noteCrashCymbal = "A5"; //note 81

  /*
   * key press events -- Send Note & Change the color of the circle
   * show the last note sent in the Notes Svg
   */
  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case 72: //h - Hi Hat
        //Output array to Midi Port named loopMIDI Port (please rename if you use another Port Name)
        //var output = WebMidi.getOutputByName("loopMIDI Port");
        //output = WebMidi.outputs[0]; -- this 2 lines have to be commented out (forgot that in the final supmission)
        output.playNote("B5", 2); //this needs to be added / got cut out in the process
        document.getElementById("hiHat").style.fill = "#00BFFF";
        document.getElementById("notetxt").textContent = noteHiHat;
        console.log("Drum sample H");
        break;
      case 73: //i - Mid Tom
        output.playNote("E5", 2); //this needs to be changed
        document.getElementById("midTom").style.fill = "#00BFFF";
        document.getElementById("notetxt").textContent = noteMidTom;
        console.log("Drum sample I");
        break;
      case 74: //j - Snare Drum
        output.playNote("D5", 2);
        document.getElementById("snareDrum").style.fill = "#00BFFF";
        document.getElementById("notetxt").textContent = noteSnareDrum;
        console.log("Drum sample J");
        break;
      case 75: //k - Bass Drum
        output.playNote("Ab5", 2);
        document.getElementById("bassDrum").style.fill = "#00BFFF";
        document.getElementById("notetxt").textContent = noteBassDrum;
        console.log("Drum sample K");
        break;
      case 76: //l -Floor Tom
        output.playNote("F5", 2);
        document.getElementById("floorTom").style.fill = "#00BFFF";
        document.getElementById("notetxt").textContent = noteFloorTom;
        console.log("Drum sample L");
        break;
      case 79: //o - Ride Cymbal
        output.playNote("G5", 2);
        document.getElementById("rideCymbal").style.fill = "#00BFFF";
        document.getElementById("notetxt").textContent = noteRideCymbal;
        console.log("Drum sample O");
        break;
      case 85: //u - High Tom
        output.playNote("C5", 2);
        document.getElementById("highTom").style.fill = "#00BFFF";
        document.getElementById("notetxt").textContent = noteHighTom;
        console.log("Drum sample U");
        break;
      case 90: //z - Crash Cymbal
        output.playNote("A5", 2);
        document.getElementById("crashCymbal").style.fill = "#00BFFF";
        document.getElementById("notetxt").textContent = noteCrashCymbal;
        console.log("Drum sample Z");
        break;
      default:
        console.log("default");
    }
  };

  //Change Color of Drum Circles back on key up
  const handleKeyUp = (event) => {
    switch (event.keyCode) {
      case 72: //h - Hi Hat
        document.getElementById("hiHat").style.fill = "#F0F8FF";
        break;
      case 73: //i - Mid Tom
        document.getElementById("midTom").style.fill = "#F0F8FF";
        break;
      case 74: //j - Snare Drum
        document.getElementById("snareDrum").style.fill = "#F0F8FF";
        break;
      case 75: //k - Bass Drum
        document.getElementById("bassDrum").style.fill = "#F0F8FF";
        break;
      case 76: //l -Floor Tom
        document.getElementById("floorTom").style.fill = "#F0F8FF";
        break;
      case 79: //o - Ride Cymbal
        document.getElementById("rideCymbal").style.fill = "#F0F8FF";
        break;
      case 85: //u - High Tom
        document.getElementById("highTom").style.fill = "#F0F8FF";
        break;
      case 90: //z - Crash Cymbal
        document.getElementById("crashCymbal").style.fill = "#F0F8FF";
        break;
      default:
        console.log("default");
    }
  };

  //Document Listeners for keydown/keyup events
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    document.addEventListener("keyup", handleKeyUp, false);
  });

  //Drum Circles Svg - on Mouse down/up functions to handle click events on circles (send notes and change color)
  return (
    <div className="Drums">
      <svg viewBox="-120 0 700.9 300.3">
        <g className="Text">
          <text x="200" y="50">
            {" "}
            DRUMS{" "}
          </text>
        </g>
        <g style={{ fill: "#F0F8FF", stroke: "#F0FFFF" }}>
          {/*Crash Cymbal*/}
          <circle
            cx="100"
            cy="60"
            r="50"
            id="crashCymbal"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("A5", 2);
              document.getElementById("crashCymbal").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = noteCrashCymbal;
              console.log("Drum sample Z");
            }}
            onMouseUp={() =>
              (document.getElementById("crashCymbal").style.fill = "#F0F8FF")
            }
          >
            <title> Z </title>
          </circle>
          {/* Hi Hat*/}
          <circle
            cx="60"
            cy="160"
            r="50"
            id="hiHat"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("B5", 2);
              document.getElementById("hiHat").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = noteHiHat;
              console.log("Drum sample H");
            }}
            onMouseUp={() =>
              (document.getElementById("hiHat").style.fill = "#F0F8FF")
            }
          >
            <title> H </title>
          </circle>
          {/*High Tom*/}
          <circle
            cx="190"
            cy="120"
            r="40"
            id="highTom"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("C5", 2);
              document.getElementById("highTom").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = noteHighTom;
              console.log("Drum sample U");
            }}
            onMouseUp={() =>
              (document.getElementById("highTom").style.fill = "#F0F8FF")
            }
          >
            <title> U </title>
          </circle>
          {/*Snare Drum*/}
          <circle
            cx="140"
            cy="220"
            r="40"
            id="snareDrum"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("D5", 2);
              document.getElementById("snareDrum").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = noteSnareDrum;
              console.log("Drum sample J");
            }}
            onMouseUp={() =>
              (document.getElementById("snareDrum").style.fill = "#F0F8FF")
            }
          >
            <title> J </title>
          </circle>
          {/*Mid Tom*/}
          <circle
            cx="290"
            cy="120"
            r="40"
            id="midTom"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("E5", 2);
              document.getElementById("midTom").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = noteMidTom;
              console.log("Drum sample I");
            }}
            onMouseUp={() =>
              (document.getElementById("midTom").style.fill = "#F0F8FF")
            }
          >
            <title> I </title>
          </circle>
          {/*Floor Tom*/}
          <circle
            cx="340"
            cy="220"
            r="40"
            id="floorTom"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("F5", 2);
              document.getElementById("floorTom").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = noteFloorTom;
              console.log("Drum sample L");
            }}
            onMouseUp={() =>
              (document.getElementById("floorTom").style.fill = "#F0F8FF")
            }
          >
            <title> L </title>
          </circle>
          {/*Ride Cymbal*/}
          <circle
            cx="380"
            cy="60"
            r="50"
            id="rideCymbal"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("G5", 2);
              document.getElementById("rideCymbal").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = noteRideCymbal;
              console.log("Drum sample O");
            }}
            onMouseUp={() =>
              (document.getElementById("rideCymbal").style.fill = "#F0F8FF")
            }
          >
            <title> O </title>
          </circle>
          {/*Bass Drum*/}
          <circle
            cx="240"
            cy="220"
            r="50"
            id="bassDrum"
            tabIndex="0"
            onMouseDown={() => {
              output.playNote("Ab5", 2);
              document.getElementById("bassDrum").style.fill = "#00BFFF";
              document.getElementById("notetxt").textContent = noteBassDrum;
              console.log("Drum sample K");
            }}
            onMouseUp={() =>
              (document.getElementById("bassDrum").style.fill = "#F0F8FF")
            }
          >
            <title> K </title>
          </circle>
        </g>
        {/*Text on the Drum circles to show what keys need to be pressed, to play*/}
        <g style={{ fill: "#B0C4DE" }}>
          {/*Crash Cymbal*/}
          <text x="95" y="65">
            Z
          </text>
          {/* Hi Hat*/}
          <text x="53" y="165">
            H
          </text>
          {/*High Tom*/}
          <text x="183" y="126">
            U
          </text>
          {/*Snare Drum*/}
          <text x="133" y="225">
            J
          </text>
          {/*Mid Tom*/}
          <text x="285" y="125">
            I
          </text>
          {/*Floor Tom*/}
          <text x="333" y="225">
            L
          </text>
          {/*Ride Cymbal*/}
          <text x="373" y="65">
            O
          </text>
          {/*Bass Drum*/}
          <text x="233" y="225">
            K
          </text>{" "}
          t
        </g>
        <text style={{ fontSize: 10 }} className="Text" x="95" y="295">
          Press Keys to play Drums with your keyboard /Click
        </text>
      </svg>
    </div>
  );
}

export default Drums;
