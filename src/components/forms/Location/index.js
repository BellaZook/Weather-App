import React from 'react';
import './location.css';

const WeatherForm = (props) => {
    return (
        <form onSubmit={props.loadWeather}>
            <div className="form-input">
                <input className="form-child" type="text" name="country" list="exampleList" placeholder="Country" />
                <datalist id="exampleList"> {props.countries} </datalist>
                <br />
                <input className="form-child" type="text" name="city" placeholder="City" />
                <br />
                <button className="button">Get Weather</button>
            </div>
        </form>
    );
}

export default WeatherForm;