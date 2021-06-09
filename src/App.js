import React, { useState, useEffect } from "react";

import "./App.css";

var sessionInterval;
var breakInterval;

const Clock = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSession, setIsSession] = useState(true);
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [breakTime, setBreakTimerLength] = useState(breakLength * 60);
  const [sessionTime, setSessionTimerLength] = useState(sessionLength * 60);

  useEffect(() => {
    if (sessionTime === 0) {
      clearInterval(sessionInterval);
      setIsSession(false);
      breakInterval = setInterval(
        () => setBreakTimerLength((previousTime) => previousTime - 1),
        1000
      );
      setSessionTimerLength(sessionLength * 60);
    }

    if (breakTime === 0) {
      clearInterval(breakInterval);
      setBreakTimerLength(breakLength * 60);
      setIsSession(true);
      setIsActive(false);
    }
  });

  var sessionMin = parseInt(sessionTime / 60);
  var sessionSec = sessionTime % 60;
  if (sessionSec.toString().length === 1) {
    sessionSec = "0" + sessionSec;
  }
  var sessionTimeFormatted = sessionMin + ":" + sessionSec;

  var breakMin = parseInt(breakTime / 60);
  var breakSec = breakTime % 60;
  if (breakSec.toString().length === 1) {
    breakSec = "0" + breakSec;
  }
  var breakTimeFormatted = breakMin + ":" + breakSec;

  const decBreakHandler = () => {
    if (breakLength > 1 && isActive === false) {
      setBreakLength((previousLength) => previousLength - 1);
      setBreakTimerLength((previousLength) => previousLength - 60);
    } else {
      setBreakLength(breakLength);
    }
  };
  const incBreakHandler = () => {
    if (breakLength < 60 && isActive === false) {
      setBreakLength((previousLength) => previousLength + 1);
      setBreakTimerLength((previousLength) => previousLength + 60);
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
    sessionInterval = setInterval(
      () => setSessionTimerLength((previousTime) => previousTime - 1),
      1000
    );
  };

  const pauseHandler = () => {
    setIsActive(false);
    clearInterval(sessionInterval);
    clearInterval(breakInterval);
  };

  const resetHandler = () => {
    setIsActive(false);
    setIsSession(true);
    clearInterval(sessionInterval);
    clearInterval(breakInterval);
    setBreakLength(5);
    setSessionLength(25);
    setBreakTimerLength(300);
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
      <div id={"timer-label"}>{isSession ? "Session" : "Break"}</div>
      <div id={"time-left"}>
        {isSession ? sessionTimeFormatted : breakTimeFormatted}
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
