import React, { useState, useEffect } from "react";

import "./App.css";

const Clock = () => {
  const [breakLength, setBreakLength] = useState("300");
  const [sessionLength, setSessionLength] = useState("1500");
  const [time, setTimerLength] = useState("5");

  const clickHandler = () => {
    console.log("Clicked!!");
  };

  const resetHandler = () => {
    setBreakLength("300");
    setSessionLength("1500");
    setTimerLength("1500");
  };

  const startHandler = () => {
      if (time > 0) {
      setInterval(
        () => setTimerLength((previousTime) => previousTime - 1),
        1000
      );
      console.log(time)
    } else {
      setTimerLength("BOOOOM!");
    }
  };

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
      <div id={"time-left"}>{time}</div>
      <div id={"start_stop"} onClick={startHandler}>
        Start/Stop
      </div>
      <div id={"reset"} onClick={resetHandler}>
        Reset
      </div>
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
