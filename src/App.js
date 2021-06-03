import React, { useState, useEffect } from "react";

import "./App.css";

const Clock = () => {
  const [breakLength, setBreakLength] = useState("5");
  const [sessionLength, setSessionLength] = useState("25");
  const [time, setTimerLength] = useState("60");

  const clickHandler = () => {
    console.log("Clicked!!");
  };

  const resetHandler = () => {
    setBreakLength("5");
    setSessionLength("25");
    setTimerLength("25")
  };

  var seconds = time * 60;
  var sec = seconds % 60;
  var min = parseInt(seconds / 60);

  if (sec.toString().length == 1) {
    sec = "0" + sec;
  }

  const timeFormatted = min + ":" + sec;

  return (
    <div className="App">
      <div id={"break-label"}>Break Length</div>
      <div id={"break-length"}>{breakLength}</div>
      <div id={"break-decrement"} onClick={clickHandler}>
        Break Decrease
      </div>
      <div id={"break-increment"} onClick={clickHandler}>
        Break Increase
      </div>

      <div id={"session-label"}>Session Length</div>
      <div id={"session-length"}>{sessionLength}</div>
      <div id={"session-decrement"} onClick={clickHandler}>
        Session Decrease
      </div>
      <div id={"session-increment"} onClick={clickHandler}>
        Session Increase
      </div>
      <div id={"timer-label"}>Session Timer</div>
      <div id={"time-left"}>{timeFormatted}</div>
      <div id={"start_stop"} onClick={clickHandler}>Start/Stop</div>
      <div id={"reset"} onClick={resetHandler}>Reset</div>
    </div>
  );
};

function App() {
  return (
    <div>
      <Clock />
    </div>
  );
}

export default App;
