import React from "react";
import "./header.css";
import ig from "./instagram.png";
import yt from "./youtube.png";
import spotify from "./spotify.png";
import apple from "./apple.png";

class Header extends React.Component {
  render() {
    return (
      <div className="App header middle">
        <ul className="pull">
          <li className="grow2">
            <a href="#About" className="headerLink">
              About
            </a>
          </li>
          <li className="grow2">
            <a href="#Music" className="headerLink">
              Music
            </a>
          </li>
          <li className="grow2">
            <a href="#Dance" className="headerLink">
              Dance
            </a>
          </li>
        </ul>
        <ul className="push">
          <li className="grow2">
            <a
              href="https://www.instagram.com/kalan_zc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ig} alt="instagram logo" />
            </a>
          </li>
          <li className="grow2">
            <a
              href="https://www.youtube.com/user/5Kaligula"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={yt} height={"110px"} alt="youtube logo" />
            </a>
          </li>
          <li className="grow2">
            <a
              href="https://open.spotify.com/artist/7lqqUECLiWd1mDiG9cvQte"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={spotify} alt="spotify logo" />
            </a>
          </li>
          <li className="grow2">
            <a
              href="https://music.apple.com/ca/artist/kalan/1482680832"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={apple} alt="apple logo" />
            </a>
          </li>
        </ul>

        <p>KALAN</p>
      </div>
    );
  }
}
export default Header;
