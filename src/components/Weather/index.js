import React from 'react';
import './weather.css';
import Info from './Info';

const Weather = (props) => {

    return (
        <div>
            <h3 className="white-shadow">Weather Conditions</h3>
            {props.country && props.city && <Info>Location: {props.city}, {props.country}</Info>}
            {props.temperature && <Info>Temperature: {props.temperature}</Info>}
            {props.humidity && <Info>Humidity: {props.humidity}</Info>}
            {props.description && <Info>Conditions:  {props.description}</Info>}
            {props.error && <Info>{props.error}</Info>}
        </div>
    );
}

export default Weather;