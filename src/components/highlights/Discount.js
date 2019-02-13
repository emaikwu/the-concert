import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Button from '../utils/Button';

class Discount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      percent: 0,
      end: 30
    }
    this.upPercentage = this.upPercentage.bind(this);
  }

  upPercentage() {
    if (this.state.percent < this.state.end) {
      this.setState({
        percent: this.state.percent + 1
      });
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.upPercentage()
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={this.upPercentage}>
            <div className="discount_porcentage">
              <span className="">{this.state.percent}%</span>
              <span className="">OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Ticket purchases before 10th JUNE</h3>
              <p>All tickets purchased before the above date, will receive a <b>30%</b> discount off. So hurry and grab a ticket for yourself, friends and family while offer lasts.</p>

              <Button value="Purchase tickets" bck="#ffa800"/>
            </div>
          </Slide>
        </div>
      </div>
    )
  }
}

export default Discount
