import React from 'react'
import Carousel from './Carousel';
import CountDown from './CountDown';
import Slide from 'react-reveal/Slide';

const Home = () => {
  return (
    <div style={{position:"relative"}}>
      <Carousel/>
      <div className="artist_name">
        <div className="wrapper">
          JOHN LEGEND
        </div>
      </div>
      <Slide left delay={1000}>
        <CountDown/>
      </Slide>
    </div>
  )
}

export default Home
