import React from "react";
import "./App.css";
import Header from "./components/header.js";
import Body from "./components/body.js";

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <div className="headshot">
        <Header />
        </div>
        <Body />
      </div>
    );
  }
}
export default App;
