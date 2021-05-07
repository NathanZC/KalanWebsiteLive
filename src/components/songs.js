import React from "react";

class Music extends React.Component {
  render() {
    return (
      <div className="AboutSection2">
        <div id="Music" className="sectionHeader">
          <h1>Songs</h1>
        </div>
        <div className="sectionbody5">
          <iframe
            title="spotify"
            src="https://open.spotify.com/embed/artist/7lqqUECLiWd1mDiG9cvQte"
            width="60%"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>
    );
  }
}
export default Music;
