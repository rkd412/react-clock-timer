import "./App.css";

const Clock = () => {
  const clickHandler = () => {
    console.log("Clicked!!");
  };

  return (
    <div className="App">
      <div id={"break-label"}>Break</div>

      <div id={"session-label"}>Session</div>

      <div id={"break-decrement"} onClick={clickHandler}>
        Break Decrease
      </div>
      <div id={"session-decrement"} onClick={clickHandler}>
        Session Decrease
      </div>
      <div id={"break-increment"} onClick={clickHandler}>
        Break Increase
      </div>
      <div id={"session-increment"} onClick={clickHandler}>
        Session Increase
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
