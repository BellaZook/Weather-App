import React, { Component } from 'react';
import WeatherForm from '../components/forms/Location';
import AppHeader from '../components/header/AppHeader';
import Weather from '../components/Weather';
import countryList from '../helpers/countries';
import './App.css';

const Api_Key = "1f3b8999ad56f0794eedede412b63854"

class App extends Component {
  state = {
    countries: [],
    temperature: null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    error: null
  }

  componentDidMount = () => {

    const countries = countryList.map((country, index) => {
      return <option key={index} >{country.name}</option>
    })
    this.setState({ countries: countries })
    console.log(countries)
  }


  getWeather = async (e) => {
    // Prevent page refresh
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`)
    const response = await api_call.json();
    console.log(response);

    if (city && country) {
      this.setState({
        temperature: response.main.temp,
        city: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        error: "Please enter the value..."
      })
    }
  }

  render() {
    return (
      <div className="App img-beach">
        <AppHeader />
        <div className="App middle">
          <WeatherForm
            countries={this.state.countries}
            loadWeather={this.getWeather}
          />
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      </div>

    );
  }
}

export default App;
