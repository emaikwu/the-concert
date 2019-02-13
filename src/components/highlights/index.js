import React from 'react'
import Fade from 'react-reveal/Fade';
import Description from './Description';
import Discount from './Discount';


const Highlights = () => {
  return (
    <div className="highlight_wrapper" name="highlights">
      <Fade duration={1500}>
        <Description/>
        <Discount/>
      </Fade>
    </div>
  )
}

export default Highlights
