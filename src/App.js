import React, { useState, useEffect } from "react";

import "./App.css";

var interval;

const Clock = () => {
  const [isActive, setIsActive] = useState(false);
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [breakTime, setBreakTimeLength] = useState(breakLength * 60);
  const [sessionTime, setSessionTimerLength] = useState(sessionLength * 60);

  var min = parseInt(sessionTime / 60);
  var sec = sessionTime % 60;
  if (sec.toString().length == 1) {
    sec = "0" + sec;
  }

  const decBreakHandler = () => {
    if (breakLength > 1 && isActive === false) {
      setBreakLength((previousLength) => previousLength - 1);
      setBreakTimeLength((previousLength) => previousLength - 60);
    } else {
      setBreakLength(breakLength);
    }
  };
  const incBreakHandler = () => {
    if (breakLength < 60 && isActive === false) {
      setBreakLength((previousLength) => previousLength + 1);
      setBreakTimeLength((previousLength) => previousLength + 60);
    } else {
      setBreakLength(breakLength);
    }
  };
  const decSessionHandler = () => {
    if (sessionLength > 1 && isActive === false) {
      setSessionLength((previousLength) => previousLength - 1);
      setSessionTimerLength((previousLength) => previousLength - 60);
    } else {
      setSessionLength(sessionLength);
    }
  };
  const incSessionHandler = () => {
    if (sessionLength < 60 && isActive === false) {
      setSessionLength((previousLength) => previousLength + 1);
      setSessionTimerLength((previousLength) => previousLength + 60);
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

  if (sessionTime === 0) {
    clearInterval(interval);
  }

  const pauseHandler = () => {
    setIsActive(false);
    clearInterval(interval);
  };

  const resetHandler = () => {
    setIsActive(false);
    clearInterval(interval);
    setBreakLength(5);
    setSessionLength(25);
    setBreakTimeLength(5);
    setSessionTimerLength(1500);
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
      <div id={"time-left"}>
        {min}:{sec}
      </div>
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
