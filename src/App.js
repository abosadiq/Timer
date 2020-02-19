import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/Clock";

function App() {
  const style = {
    outline: "5px solid #000",
    width: "300px",
    height: "100px",
    margin: "10px auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  };
  return (
    <div>
      <div style={style}>
        <p> London Clock</p>
        <Clock />
      </div>
    </div>
  );
}

export default App;
