import React, { useState } from 'react';

const WeatherDisplay = (props) => {
  return (
    <div>
      <div>{props.currentLocation}</div>
      <div>{Math.round(props.currentTemp)}</div>
      <div>{props.currentWeather}</div>
    </div>
  );
};
export default WeatherDisplay;
