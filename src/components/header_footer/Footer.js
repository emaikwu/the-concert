import React from 'react'
import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade>
        <div className="font_righteous footer_logo_venue">
          The Legendary Concert
          <div className='footer_copyright'>
            <small>The Legendary Concert is a fictitious webpage. <br/> Event's time, date, venue and tickets purchases are not real. This page is for design and showcasing purposes</small>
            <p>&copy; 2019 <a href="https://emaikwuinnocent.com"><b>Emaikwu Innocent</b></a> All rights reserved</p>
          </div>
        </div>
      </Fade>
    </footer>
  )
}

export default Footer
