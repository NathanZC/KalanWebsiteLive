import React from "react";
import SpotifyPlayer from 'react-spotify-player';
import ReactPlayer from 'react-player'
const size = {
    width: '100%',
    height: 80,
  };
class Music extends React.Component {
  render() {
    return (
      <div className="MusicSection">
        <div className="sectionHeader">
          <h1>MUSIC VIDEOS</h1>
        </div>
        <div className="sectionbody">
        <ReactPlayer className="video" url='https://www.youtube.com/watch?v=fwuBmqW9xAE' controls="true"/> 
        <ReactPlayer className="video" url='https://www.youtube.com/watch?v=QzI1naY5BqE'controls="true" /> 
        <ReactPlayer className="video" url='https://www.youtube.com/watch?v=D2hLgfp0rwo' controls="true" /> 
        </div>
      </div>
    );
  }
}
export default Music;
