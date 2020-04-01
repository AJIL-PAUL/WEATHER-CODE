import React from "react";
// import Titles from "./components/Titles";
import Climate from "./components/Climate";
import Form from "./components/Form";
import Weather from "./components/Weather";  
import animationDataSunny from './assets/climate/sunny.json'
import animationDataRainy from './assets/climate/rain.json'
import animationDataDefault from './assets/climate/default.json'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// n
const API_KEY = "93a7e886a7ff1e5ab98f1c8be67a42ec";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    main: undefined,
    description: undefined,
    error: undefined,
    animationDatas:animationDataDefault
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        main: data.weather[0].main,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        main:undefined,
        error: "Please enter the values."
      });
    }
    if(this.state.main==="Clear"){
      this.setState({
        animationDatas:animationDataSunny
      });
    }
    else if(this.state.main==="Clouds"){
      this.setState({
        animationDatas:animationDataSunny
      });
    }
    else if(this.state.main==="Rain"){
      this.setState({
        animationDatas:animationDataRainy
      });
    }
    else{
      this.setState({
        animationDatas:animationDataDefault
      });
    }
  }
  render() {
    return (
      <div>
        
          <div className="container">
              <div className="row">
                <div className="col-lg-7 title-container">
                    <Climate animationData={this.state.animationDatas}/> 
                    {/* <Titles /> */}
                </div>
                <div className="col-lg-5 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    main={this.state.main}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
          </div>
      </div>
        
    );
  }
};

export default App;