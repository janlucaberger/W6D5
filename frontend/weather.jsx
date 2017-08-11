import React from 'react';


class Weather extends React.Component{
  constructor() {
    super();

    this.state = {
      temperature: ""
    };
    this.getWeather = this.getWeather.bind(this);
    this.getUserLocation = this.getUserLocation.bind(this);
    this.renderTemp = this.renderTemp.bind(this);
  }

  componentDidMount() {
    this.getUserLocation();
    
  }

  getUserLocation() {
    navigator.geolocation.getCurrentPosition((pos) => {
      // debugger
      this.getWeather(pos)
    });
  }

  getWeather(pos) {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const self = this;
    const request = new XMLHttpRequest();
    // request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=NY,NY&appid=bcb83c4b54aee8418983c2aff3073b3b', true);
    request.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bcb83c4b54aee8418983c2aff3073b3b`, true);

    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        self.setState({temperature: JSON.parse(request.responseText).main.temp});
      } else {
        console.log(request.responseText);
      }
    };

    request.onerror = () =>{
      console.log("Error");
    };

    request.send();

  }

  renderTemp() {
    const temp = this.state.temperature;
    if (temp.length < 1) {
      return '';
    } else {
      return Math.floor(temp * (9/5) - 459.67) +  "\u2109";
    }
  }

  render() {
     return(
       <div className="weather-container">
         <h1>The Weather in New York: </h1>
         <h1>{this.renderTemp()}</h1>
       </div>
    );
  }
}

export default Weather;
