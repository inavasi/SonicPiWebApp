import React, { useEffect } from "react";
import Piano from "./Piano.js";
import Drums from "./Drums.js";
import "./App.css";
import WebMidi from "webmidi";
import Slider from "./Slider.js";
import Notes from "./Notes.js";
import Buttons from "./Buttons.js";
import sonicLogo from "./346449.svg";

function App() {
  WebMidi.enable(function (err) {
    //Output array to Midi Port named loopMIDI Port (please rename if you use another Port Name)
    var output = WebMidi.getOutputByName("loopMIDI Port");
    output = WebMidi.outputs[0];
  });
  //Output array to Midi Port named loopMIDI Port (please rename if you use another Port Name)
  var output = WebMidi.getOutputByName("loopMIDI Port");
  output = WebMidi.outputs[0];

  //Resize handler
  const onWindowResize = () => {
    window.innerWidth = Math.floor(window.innerWidth - 5);
    window.innerHeight = Math.floor(window.innerHeight - 5);
  };

  //Document Listeners
  useEffect(() => {
    document.addEventListener("resize", onWindowResize, false);
  });

  return (
    <div className="App">
      <header className="App-header">
        CONTROLL &nbsp;
        <img src={sonicLogo} className="logo" alt="sonic Pi" />
      </header>
      <br />
      <Drums />
      <Notes />
      <br />
      <br />
      <Piano />
      <br />
      <br />
      <br />
      <h3 className="Text"> DJ CONTROLLER </h3>
      <Slider />
      <Buttons />
      <br />
      <br />
      <br />
      <footer className="App-footer">© Ina Vasileiadou</footer>
    </div>
  );
}

export default App;
