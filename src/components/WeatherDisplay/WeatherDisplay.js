import React from 'react';
import '../../css/main.css';

const WeatherDisplay = (props) => {
  return (
    <div>
      <div>{props.currentLocation}</div>
      <div>{Math.round(props.currentTemp)}°</div>
      <div>{props.currentWeather}</div>
      <div></div>
    </div>
  );
};
export default WeatherDisplay;
