import React, { useState } from "react";
import "./App.css";
import WebMidi from "webmidi";

function Buttons() {
  WebMidi.enable(function (err) {
    //Output array to Midi Port named loopMIDI Port (please rename if you use another Port Name)
    var output = WebMidi.getOutputByName("loopMIDI Port");
    output = WebMidi.outputs[0];
  });
  
  //Output array to Midi Port named loopMIDI Port (please rename if you use another Port Name)
  var output = WebMidi.getOutputByName("loopMIDI Port");
  output = WebMidi.outputs[0];

  //controll state/note (value 1-8) output of buttons
  const [btn1IsActive, setbtn1Active] = useState("false");
  const [btn2IsActive, setbtn2Active] = useState("false");
  const [btn3IsActive, setbtn3Active] = useState("false");
  const [btn4IsActive, setbtn4Active] = useState("false");
  const [btn5IsActive, setbtn5Active] = useState("false");
  const [btn6IsActive, setbtn6Active] = useState("false");
  const [btn7IsActive, setbtn7Active] = useState("false");
  const [btn8IsActive, setbtn8Active] = useState("false");
  const notebtn1 = "C#-1";
  const notebtn2 = "D-1";
  const notebtn3 = "Eb-1";
  const notebtn4 = "E-1";
  const notebtn5 = "F-1";
  const notebtn6 = "Gb-1";
  const notebtn7 = "G-1";
  const notebtn8 = "Ab-1";

  //handle Button input
  const handleInput = (event) => {
    /*
     * button 1-8 - change the state if clicked and send note on/off messages when active/not active
     * handle color events when clicked
     * send note 1-8 for matching button on channel 4
     */
    if (event.target.id === "Btn1" && btn1IsActive) {
      console.log("Button 1 active");
      output.playNote(notebtn1, 4);
      document.getElementById("Btn1").style.backgroundColor = "#B0C4DE";
      document.getElementById("Btn1").style.color = "#F0F8FF";
      setbtn1Active(!btn1IsActive);
    } else if (event.target.id === "Btn1" && !btn1IsActive) {
      console.log("Button 1 not active");
      output.stopNote(notebtn1, 4, { velocity: 1 });
      document.getElementById("Btn1").style.backgroundColor = "#F0F8FF";
      document.getElementById("Btn1").style.color = "#B0C4DE";
      setbtn1Active(!btn1IsActive);
    } else if (event.target.id === "Btn2" && btn2IsActive) {
      console.log("Button 2 active");
      output.playNote(notebtn2, 4);
      document.getElementById("Btn2").style.backgroundColor = "#B0C4DE";
      document.getElementById("Btn2").style.color = "#F0F8FF";
      setbtn2Active(!btn2IsActive);
    } else if (event.target.id === "Btn2" && !btn2IsActive) {
      console.log("Button 2 not active");
      output.stopNote(notebtn2, 4, { velocity: 1 });
      document.getElementById("Btn2").style.backgroundColor = "#F0F8FF";
      document.getElementById("Btn2").style.color = "#B0C4DE";
      setbtn2Active(!btn2IsActive);
    } else if (event.target.id === "Btn3" && btn3IsActive) {
      console.log("Button 3 active");
      output.playNote(notebtn3, 4);
      document.getElementById("Btn3").style.backgroundColor = "#B0C4DE";
      document.getElementById("Btn3").style.color = "#F0F8FF";
      setbtn3Active(!btn3IsActive);
    } else if (event.target.id === "Btn3" && !btn3IsActive) {
      console.log("Button 3 not active");
      output.stopNote(notebtn3, 4, { velocity: 0 });
      document.getElementById("Btn3").style.backgroundColor = "#F0F8FF";
      document.getElementById("Btn3").style.color = "#B0C4DE";
      setbtn3Active(!btn3IsActive);
    } else if (event.target.id === "Btn4" && btn4IsActive) {
      console.log("Button 4  active");
      output.playNote(notebtn4, 4);
      document.getElementById("Btn4").style.backgroundColor = "#B0C4DE";
      document.getElementById("Btn4").style.color = "#F0F8FF";
      setbtn4Active(!btn4IsActive);
    } else if (event.target.id === "Btn4" && !btn4IsActive) {
      console.log("Button 4 not active");
      output.stopNote(notebtn4, 4, { velocity: 0 });
      document.getElementById("Btn4").style.backgroundColor = "#F0F8FF";
      document.getElementById("Btn4").style.color = "#B0C4DE";
      setbtn4Active(!btn4IsActive);
    } else if (event.target.id === "Btn5" && btn5IsActive) {
      console.log("Button 5 active");
      output.playNote(notebtn5, 4);
      document.getElementById("Btn5").style.backgroundColor = "#B0C4DE";
      document.getElementById("Btn5").style.color = "#F0F8FF";
      setbtn5Active(!btn5IsActive);
    } else if (event.target.id === "Btn5" && !btn5IsActive) {
      console.log("Button 5 not active");
      output.stopNote(notebtn5, 4, { velocity: 0 });
      document.getElementById("Btn5").style.backgroundColor = "#F0F8FF";
      document.getElementById("Btn5").style.color = "#B0C4DE";
      setbtn5Active(!btn5IsActive);
    } else if (event.target.id === "Btn6" && btn6IsActive) {
      console.log("Button 6 active");
      output.playNote(notebtn6, 4);
      document.getElementById("Btn6").style.backgroundColor = "#B0C4DE";
      document.getElementById("Btn6").style.color = "#F0F8FF";
      setbtn6Active(!btn6IsActive);
    } else if (event.target.id === "Btn6" && !btn6IsActive) {
      console.log("Button 6 not active");
      output.stopNote(notebtn6, 4, { velocity: 0 });
      document.getElementById("Btn6").style.backgroundColor = "#F0F8FF";
      document.getElementById("Btn6").style.color = "#B0C4DE";
      setbtn6Active(!btn6IsActive);
    } else if (event.target.id === "Btn7" && btn7IsActive) {
      console.log("Button 7 active");
      output.playNote(notebtn7, 4);
      document.getElementById("Btn7").style.backgroundColor = "#B0C4DE";
      document.getElementById("Btn7").style.color = "#F0F8FF";
      setbtn7Active(!btn7IsActive);
    } else if (event.target.id === "Btn7" && !btn7IsActive) {
      console.log("Button 7 not active");
      output.stopNote(notebtn7, 4, { velocity: 0 });
      document.getElementById("Btn7").style.backgroundColor = "#F0F8FF";
      document.getElementById("Btn7").style.color = "#B0C4DE";
      setbtn7Active(!btn7IsActive);
    } else if (event.target.id === "Btn8" && btn8IsActive) {
      console.log("Button 8 active");
      output.playNote(notebtn8, 4);
      document.getElementById("Btn8").style.backgroundColor = "#B0C4DE";
      document.getElementById("Btn8").style.color = "#F0F8FF";
      setbtn8Active(!btn8IsActive);
    } else if (event.target.id === "Btn8" && !btn8IsActive) {
      console.log("Button 8 not active");
      output.stopNote(notebtn8, 4, { velocity: 0 });
      document.getElementById("Btn8").style.backgroundColor = "#F0F8FF";
      document.getElementById("Btn8").style.color = "#B0C4DE";
      setbtn8Active(!btn8IsActive);
    }
  };

  //Buttons
  return (
    <div className="Buttons">
      <svg viewBox="200 0 500.9 100.3">
        <g className="Text">
          <text style={{ fontSize: 60 }} x="265" y="100">
            {" "}
            BUTTONS{" "}
          </text>
        </g>
      </svg>
      <div className="Btn-group">
        <button type="button" id="Btn1" className="Btn" onClick={handleInput}>
          Btn1
        </button>
        <button type="button" id="Btn2" className="Btn" onClick={handleInput}>
          Btn2
        </button>
        <button type="button" id="Btn3" className="Btn" onClick={handleInput}>
          Btn3
        </button>
        <button type="button" id="Btn4" className="Btn" onClick={handleInput}>
          Btn4
        </button>
        <button type="button" id="Btn5" className="Btn" onClick={handleInput}>
          Btn5
        </button>
        <button type="button" id="Btn6" className="Btn" onClick={handleInput}>
          Btn6
        </button>
        <button type="button" id="Btn7" className="Btn" onClick={handleInput}>
          Btn7
        </button>
        <button type="button" id="Btn8" className="Btn" onClick={handleInput}>
          Btn8
        </button>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Buttons;