import React from "react";
import SpotifyPlayer from 'react-spotify-player';
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'
const size = {
    width: '50%',
    height:200,
  };
class Music extends React.Component {
  render() {
    return (
      <div className="AboutSection2">
        <div className="sectionHeader">
          <h1>Songs</h1>
        </div>
        <div className="sectionbody5">
        <iframe src="https://open.spotify.com/embed/artist/7lqqUECLiWd1mDiG9cvQte" width="60%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
      </div>
    );
  }
}
export default Music;
