import React, { Component } from 'react';
import WeatherForm from '../components/forms/Location';
import AppHeader from '../components/header/AppHeader';
import Weather from '../components/Weather';
import countryList from '../helpers/countries';
import './App.css';
import tempConverter from '../components/Weather/tempConverter';

const Api_Key = "1f3b8999ad56f0794eedede412b63854"

class App extends Component {
  state = {
    countries: [],
    tempInKelvin: null,
    temperature: null,
    tempType: "Temp",
    city: null,
    country: null,
    humidity: null,
    description: null,
    error: null,

  }

  componentDidMount = () => {

    const countries = countryList.map((country, index) => {
      return <option key={index} >{country.name}</option>
    })
    this.setState({ countries: countries })
    // console.log(countries)
  }


  getWeather = async (e) => {
    // Prevent page refresh
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`)
    const response = await api_call.json();
    // console.log(response);

    if (city && country) {
      // console.log(response.main.temp)
      const convertedTemperature = tempConverter(response.main.temp, "K");
      this.setState({
        temperature: convertedTemperature,
        tempType: "F",
        tempInKelvin: response.main.temp,
        city: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        error: <h3 className="bg-white-05">Please enter a value for <br /> City and Country.</h3>
      })
    }
  }

  handleChangeTemp = (tempType) => {
    const convertedTemperature = tempConverter(this.state.tempInKelvin, tempType);
    this.setState({
      temperature: convertedTemperature,
      tempType: tempType
    })
  }

  render() {
    return (
      <div className="App img-beach">
        <AppHeader />
        <div className="App">
          <WeatherForm
            countries={this.state.countries}
            loadWeather={this.getWeather}
          />
          <Weather
            temperature={this.state.temperature}
            tempType={this.state.tempType}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
            handleChangeTemp={this.handleChangeTemp}
          />
        </div>
      </div>

    );
  }
}

export default App;
