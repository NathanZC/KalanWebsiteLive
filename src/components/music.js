import React from "react";
import ReactPlayer from 'react-player'

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
