import React from 'react';
import './header.css'
import Dropdown from './dropdown.js'
import ig from './instagram.png'
import yt from './youtube.png'
import spotify from './spotify.png'
import apple from './apple.png'


class Header extends React.Component {
  render(){
    return (
      <div className="App header middle">
      <ul className='pull'>
      <li className='grow2'><a href='#About'  className='headerLink' >About</a></li>
      <li className='grow2'><a href='#Music'  className='headerLink' >Music</a></li>
      <li className='grow2'><a href='#Dance' className='headerLink' >Dance</a></li>

      </ul>
      <ul className='push'>
      <li className='grow2'><a href='https://www.instagram.com/kalan_zc/' target="_blank"><img src={ig} /></a></li>
      <li className='grow2'><a href='https://www.youtube.com/user/5Kaligula' target="_blank"><img src={yt} height={"110px"} /></a></li>
      <li className='grow2'><a href='https://open.spotify.com/artist/7lqqUECLiWd1mDiG9cvQte' target="_blank"><img src={spotify} /></a></li>
      <li className='grow2'><a href='https://music.apple.com/ca/artist/kalan/1482680832' target="_blank"><img src={apple} /></a></li>
      </ul>

      <p>
                 KALAN          
      </p>
    </div>

    );
  }
}
export default Header;