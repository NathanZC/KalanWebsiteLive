import React from "react";
import "./body.css";
import Music from "./music.js"
import About from "./about.js"
import Songs from "./songs.js"
class Body extends React.Component {
  render() {
    return (
      <div className="App ">
        <div className=" ">
        </div>
        <Music />
        <Songs />
        <About />
      </div>
    );
  }
}
export default Body;
