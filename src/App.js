import React, { useState, useEffect } from "react";

import "./App.css";

const Clock = () => {
  const [breakLength, setBreakLength] = useState(300);
  const [sessionLength, setSessionLength] = useState(1500);
  const [breakTime, setBreakTimeLength] = useState(breakLength);
  const [sessionTime, setSessionTimerLength] = useState(sessionLength);

  const decBreakHandler = () => {
    setBreakLength((previousLength) => previousLength - 1);
    setBreakTimeLength((previousLength) => previousLength - 1);
  };
  const incBreakHandler = () => {
    setBreakLength((previousLength) => previousLength + 1);
    setBreakTimeLength((previousLength) => previousLength + 1);
  };
  const decSessionHandler = () => {
    setSessionLength((previousLength) => previousLength - 1);
    setSessionTimerLength((previousLength) => previousLength - 1);
  };
  const incSessionHandler = () => {
    setSessionLength((previousLength) => previousLength + 1);
    setSessionTimerLength((previousLength) => previousLength + 1);
  };

  const resetHandler = () => {
    setBreakLength(300);
    setSessionLength(1500);
    setBreakTimeLength(300);
    setSessionTimerLength(1500);
  };

  const startHandler = () => {
    if (sessionTime > 0) {
      setInterval(
        () => setSessionTimerLength((previousTime) => previousTime - 1),
        1000
      );
      console.log(sessionTime);
    } else {
      setSessionLength("BOOOOM!");
    }
  };

  return (
    <div className="App">
      <div id={"break-label"}>Break Length</div>
      <div id={"break-length"}>{breakLength}</div>
      <div id={"break-decrement"} onClick={decBreakHandler}>
        Break Decrease
      </div>
      <div id={"break-increment"} onClick={incBreakHandler}>
        Break Increase
      </div>

      <div id={"session-label"}>Session Length</div>
      <div id={"session-length"}>{sessionLength}</div>
      <div id={"session-decrement"} onClick={decSessionHandler}>
        Session Decrease
      </div>
      <div id={"session-increment"} onClick={incSessionHandler}>
        Session Increase
      </div>
      <div id={"timer-label"}>Session Timer</div>
      <div id={"time-left"}>{sessionTime}</div>
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
