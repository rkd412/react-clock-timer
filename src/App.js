import React, { useState, useEffect } from "react";

import "./App.css";

var interval;

const Clock = () => {
  const [isActive, setIsActive] = useState(false);
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [breakTime, setBreakTimeLength] = useState(breakLength);
  const [sessionTime, setSessionTimerLength] = useState(sessionLength);

  const decBreakHandler = () => {
    if (breakLength > 1) {
      setBreakLength((previousLength) => previousLength - 1);
      setBreakTimeLength((previousLength) => previousLength - 1);
    } else {
      setBreakLength(breakLength);
    }
  };
  const incBreakHandler = () => {
    if (breakLength < 60) {
      setBreakLength((previousLength) => previousLength + 1);
      setBreakTimeLength((previousLength) => previousLength + 1);
    } else {
      setBreakLength(breakLength);
    }
  };
  const decSessionHandler = () => {
    if (sessionLength > 1) {
      setSessionLength((previousLength) => previousLength - 1);
      setSessionTimerLength((previousLength) => previousLength - 1);
    } else {
      setSessionLength(sessionLength);
    }
  };
  const incSessionHandler = () => {
    if (sessionLength < 60) {
      setSessionLength((previousLength) => previousLength + 1);
      setSessionTimerLength((previousLength) => previousLength + 1);
    } else {
      setSessionLength(sessionLength);
    }
  };

  const startHandler = () => {
    setIsActive(true);
    interval = setInterval(
      () => setSessionTimerLength((previousTime) => previousTime - 1),
      1000
    );
  };

  const pauseHandler = () => {
    setIsActive(false);
    clearInterval(interval);
  };

  const resetHandler = () => {
    clearInterval(interval);
    setBreakLength(5);
    setSessionLength(25);
    setBreakTimeLength(5);
    setSessionTimerLength(25);
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
      <div id={"start_stop"} onClick={isActive ? pauseHandler : startHandler}>
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

/*......*/
