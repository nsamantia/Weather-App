import React from 'react';
import '../../css/main.css';

const WeatherDisplay = (props) => {
  return (
    <div className="weather-display-container">
      <div className="weather-info ">
        <div>
          <p className="city">{props.currentLocation}</p>
          <p className="forcast">{props.currentWeather}</p>
        </div>
        <div>
          <p className="temp">{Math.round(props.currentTemp)}°</p>
        </div>
      </div>
    </div>
  );
};
export default WeatherDisplay;
