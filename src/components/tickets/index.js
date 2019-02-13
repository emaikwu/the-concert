import React from 'react'
import Boxes from './Boxes';

class Tickets extends React.Component {

  state = {
    pricing: [
    {
      price: 500,
      category: "Regular",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi similique quas doloremque illum",
      delay: 200
    },
    {
      price: 50000,
      category: "Silver",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi similique quas doloremque illum",
      delay: 0
    },
    {
      price: 150000,
      category: "Gold",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi similique quas doloremque illum",
      delay: 200
    }
  ]};

  render() {
    return (
      <div className="bck_black" name="tickets">
        <div className="center_wrapper pricing_section">
          <h2>Tickets</h2>
          <div className="pricing_wrapper">
            {this.state.pricing.map((item, i) => 
              <Boxes 
              key={i}
              price={item.price} 
              desc={item.desc}
              category={item.category}
              delay={item.delay}
              />)}
          </div>
        </div>
      </div>
    )
  }
}

export default Tickets
