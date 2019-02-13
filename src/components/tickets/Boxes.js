import React from 'react'
import Button from '../utils/Button';
import Zoom from 'react-reveal/Zoom';

const Boxes = ({price, category, desc, delay}) => {
  return (
    <Zoom delay={delay}>
      <div className="pricing_item">
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>${price}</span>
            <span>{category}</span>
          </div>
          <div className="pricing_description">{desc}</div>
          <div className="pricing_buttons">
            <Button value="Purchase tickets" bck="#ffa800" />
          </div>
        </div>
      </div>
    </Zoom>
  )
}

export default Boxes
