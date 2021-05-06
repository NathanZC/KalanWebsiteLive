import React from "react";
import headshot from "./banner.jpg";
import "./body.css";
import Music from "./music.js"
class Body extends React.Component {
  render() {
    return (
      <div className="App ">
        <div className="headshot ">
          <img
            id="headshott"
            className="picture"
            src={headshot}
            alt="instagram logo"
          />
        </div>
        <Music />
      </div>
    );
  }
}
export default Body;
