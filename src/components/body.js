import React from 'react';
import './header.css';
import logo from '../logo.svg';
import './body.css';
import ReactPlayer from 'react-player'
import SpotifyPlayer from 'react-spotify-player';


const size = {
  width: '100%',
  height: 80,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'
 


class Body extends React.Component {
  render(){
    return (
    <div className="App ">
      	<div className='body'>

      	</div>




      <div id={'About'} className='Bio'>
        <div className='tittle'>
            About
        </div>
        <div className='About'>
        

 

Who says rappers can’t dance? Kalan is a 14 year old rapper from Toronto Canada who can move. This kid has skills - he has been rapping and writing music since he was 11 years old and dancing since he was 5 years old (see MJ clip below). Performed in various cities, including Toronto’s Sony Center and dance battles in Toronto and Montreal. 

<br /> 
<br /> 

 

Kalan’s first original video “Motivate” involved sneaking into his brother’s high school and filming a quick video released in 2019.  He is currently in the studio working on an Album due to be released in September 2020 and a video where he won’t be so rushed to film it . His music is inspired by Logic, NF and Drake. This kid has hip hop in his blood and brings it all together with his lyrics, tempo changes, fast rap skills, and the moves to back it all up.
        </div>
      </div>




      <div id={'Music'} className='music'>
        <div className='tittle'>
            Music
        </div>
        <div className='videoarea'>
        <ReactPlayer  url='https://www.youtube.com/watch?v=D2hLgfp0rwo'  />
        </div>
        <div className='spotify'>
        <SpotifyPlayer
        uri="spotify:track:5Clo76k26vURX3Hegxh2xF"
        size={size}
        view={view}
        theme={theme}
        />
        </div>
      </div>




        <div id={'Dance'} className='dance'>
          <div className='tittle'>
            Dance
          </div>
       <div className='videoarea1 player-wrapper'>
      <ReactPlayer  className='react-player' width={'100%'}  height={'820px'} url='https://www.youtube.com/watch?v=sgXUyvFU71s'  />

      </div>
      <div className='videoarea2'>

      </div>





      </div>
      <div className='footer'>
      <div className='footerElement' ><a href="Mainpage.htm" style={{color: 'white'}}>Home</a></div>
      <div className='footerElement' ><a href="Mainpage.htm" style={{color: 'white'}}>contact us</a></div>
      </div>





   </div>
    );
  }
}
export default Body;