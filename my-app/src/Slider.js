import React from "react";
import "./App.css";
import WebMidi from "webmidi";

function Slider() {
  const [value, setVal] = React.useState(30);

  //Output array to Midi Port named loopMIDI Port (please rename if you use another Port Name)
  var output = WebMidi.getOutputByName("loopMIDI Port");
  output = WebMidi.outputs[0];

  //Slider input 1-4
  const handleInput = (event, newVal) => {
    let input = event.target.value;
    setVal(newVal);
    let vel = input / 127;

    /*
     * handle slider input & change matching number input value accordinlgy & the other way around
     * note messages on Channel 3 have the value 1-4 for matching slider
     */
    if (event.target.id === "slider1" || event.target.id === "text1") {
      output.playNote("C#-1", 3, { velocity: vel });
      document.getElementById("slider1").value = document.getElementById(
        "text1"
      ).value = input;
      console.log("Slider 1");
    } else if (event.target.id === "slider2" || event.target.id === "text2") {
      output.playNote("D-1", 3, { velocity: vel });
      document.getElementById("slider2").value = document.getElementById(
        "text2"
      ).value = input;
      console.log("Slider 2");
    } else if (event.target.id === "slider3" || event.target.id === "text3") {
      output.playNote("Eb-1", 3, { velocity: vel });
      document.getElementById("slider3").value = document.getElementById(
        "text3"
      ).value = input;
      console.log("Slider 3");
    } else if (event.target.id === "slider4" || event.target.id === "text4") {
      output.playNote("E-1", 3, { velocity: vel });
      document.getElementById("slider4").value = document.getElementById(
        "text4"
      ).value = input;
      console.log("Slider 4");
    }
  };

  //Slider
  return (
    <div className="SliderDiv">
      <svg viewBox="-120 0 1000.9 70.3">
        <g className="Text">
          <text style={{ fontSize: 50 }} x="300" y="40">
            {" "}
            SLIDER{" "}
          </text>
        </g>
      </svg>
      <form>
        <input
          type="text"
          htmlFor="slider1"
          className="SliderName"
          placeholder="Slider #1"
        />
        <input
          type="range"
          id="slider1"
          title="Slider #1"
          onChange={handleInput}
          min="0"
          max="127"
          className="Slider"
          value={value}
          defaultValue="0"
        />
        <input
          type="number"
          className="NumberInput"
          id="text1"
          onChange={handleInput}
          value={value}
          min="0"
          max="127"
        />
        <br />
        <input
          type="text"
          htmlFor="slider2"
          className="SliderName"
          placeholder="Slider #2"
        />
        <input
          type="range"
          id="slider2"
          title="Slider #2"
          onChange={handleInput}
          min="0"
          max="127"
          className="Slider"
          value={value}
        />
        <input
          type="number"
          className="NumberInput"
          id="text2"
          onChange={handleInput}
          value={value}
          min="1"
          max="127"
        />
        <br />
        <input
          type="text"
          htmlFor="slider3"
          className="SliderName"
          placeholder="Slider #3"
        />
        <input
          type="range"
          id="slider3"
          title="Slider #3"
          onChange={handleInput}
          min="0"
          max="127"
          className="Slider"
          value={value}
        />
        <input
          type="number"
          className="NumberInput"
          id="text3"
          onChange={handleInput}
          value={value}
          min="1"
          max="127"
        />
        <br />
        <input
          type="text"
          htmlFor="slider4"
          className="SliderName"
          placeholder="Slider #4"
        />
        <input
          type="range"
          id="slider4"
          title="Slider #4"
          onChange={handleInput}
          min="0"
          max="127"
          className="Slider"
          value={value}
        />
        <input
          type="number"
          className="NumberInput"
          id="text4"
          onChange={handleInput}
          value={value}
          min="1"
          max="127"
        />
        <br />
      </form>
      <br />
      <br />
    </div>
  );
}

export default Slider;
