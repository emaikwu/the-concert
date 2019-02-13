import React, { Component } from 'react'

export class CountDown extends Component {

  state = {
    deadline: `Dec, 31, ${new Date().getFullYear()}`,
    days: '',
    hours: '',
    minutes: '', 
    seconds: ''
  }

  getTimeUntil() {
    const time = Date.parse(this.state.deadline) -  Date.parse(new Date());
    if(time < 0) {

    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time/1000/60) % 60 );
      const hours = Math.floor(time/(1000 * 60 * 60) % 24);
      const days = Math.floor(time/(1000*60*60*24));
      this.setState({
        seconds,
        minutes,
        hours, 
        days
      });
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.getTimeUntil();
    }, 1000);
  }

  render() {
    return (
      <div className='countdown_wrapper'>
        <div className='countdown_top'>Event starts in</div>
        <div className='countdown_bottom'>
          <div className="countdown_item">
            <div className="countdown_time">
              {this.state.days}
            </div>
            <div className="countdown_tag">Days</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">
              {this.state.hours}
            </div>
            <div className="countdown_tag">Hrs</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">
              {this.state.minutes}
            </div>
            <div className="countdown_tag">Mins</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">
              {this.state.seconds}
            </div>
            <div className="countdown_tag">Sec</div>
          </div>
        </div>
      </div>
    )
  }
}

export default CountDown
