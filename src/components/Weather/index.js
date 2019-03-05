import React from 'react';
import './weather.css';
import Info from './Info';

const Weather = (props) => {

    return (
        <div>
            <h3 className="white-shadow">Weather Conditions</h3>
            {props.error && props.error}
            <div className="temp-group font-lg">
                <Info className="temp-info min-width100">
                    {props.temperature} {props.tempType}
                </Info>
                <div className="btn-group-temp">
                    <button className="button" onClick={() => { props.handleChangeTemp("F") }}>F</button>
                    <button className="button" onClick={() => { props.handleChangeTemp("C") }}>C</button>
                    <button className="button" onClick={() => { props.handleChangeTemp("K") }}>K</button>
                </div>
            </div>
            <div className="font-md">
                <Info>Humidity: {props.humidity && props.humidity + " %"}  </Info>
                <Info>Conditions: <br />  {props.description}</Info>
            </div>
        </div>
    );
}

export default Weather;