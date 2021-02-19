import React, { useState } from 'react';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';

const WeeklyWeatherDisplay = (props) => {
  return (
    <div>
      <div>
        <div>{props.dayOneDate}</div>
      </div>
      <div>
        <div>{props.dayTwoDate}</div>
      </div>
      <div>
        <div>{props.dayThreeDate}</div>
      </div>
      <div>
        <div>{props.dayFourDate}</div>
      </div>
      <div>
        <div>{props.dayFiveDate}</div>
      </div>
      <div>
        <div>{props.daySixDate}</div>
      </div>
    </div>
  );
};

export default WeeklyWeatherDisplay;
