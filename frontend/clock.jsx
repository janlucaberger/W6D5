import React from 'react';

class Clock extends React.Component{
  constructor(){
    super();

    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
  }

  tick(){
    this.setState({
      time: new Date()
    });
  }

  componentDidMount(){
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderTime() {
    const t = this.state.time;
    let hours = t.getHours()%12;
    let minutes;
    let seconds;
    if (t.getMinutes() < 10) {
      minutes = '0' + t.getMinutes();
    } else {
      minutes = t.getMinutes();
    }
    if (t.getSeconds() < 10) {
      seconds = '0' + t.getSeconds();
    } else {
      seconds = t.getSeconds();
    }
    return hours + ':' + minutes + ':' + seconds;
  }

  renderDay(){

  }


  render(){
    return(
      <div className="clock-container">
        <div className="clockElement">
          <h1>Time: </h1>
          <h1>{this.renderTime()}</h1>
        </div>
        <div className="clockElement">
          <h1>Date: </h1>
          <h1>{this.state.time.toDateString()}</h1>
        </div>
      </div>
    );
  }
}

export default Clock;
