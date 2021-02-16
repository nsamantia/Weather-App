import React from 'react';
import '../../css/main.css';

const WeatherDisplay = (props) => {
  return (
    <div className="weather-display-container">
      <div className="weather-info ">
        <div>
          <p>{props.currentLocation}</p>
        </div>
        <div>
          <p>{Math.round(props.currentTemp)}°</p>
        </div>
        <div>
          <p>{props.currentWeather}</p>
        </div>
      </div>
    </div>
  );
};
export default WeatherDisplay;
