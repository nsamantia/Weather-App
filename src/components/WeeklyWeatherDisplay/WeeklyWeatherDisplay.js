import React from 'react';

const WeeklyWeatherDisplay = (props) => {
  return (
    <div>
      <div>
        <div>{props.dayOneDate}</div>
        <div>H: {Math.round(props.dayOneHighTemp)}</div>
        <div>L: {Math.round(props.dayOneLowTemp)}</div>
      </div>
      <div>
        <div>{props.dayTwoDate}</div>
        <div>H: {Math.round(props.dayTwoHighTemp)}</div>
        <div>L: {Math.round(props.dayTwoLowTemp)}</div>
      </div>
      <div>
        <div>{props.dayThreeDate}</div>
        <div>H: {Math.round(props.dayThreeHighTemp)}</div>
        <div>L: {Math.round(props.dayThreeLowTemp)}</div>
      </div>
      <div>
        <div>{props.dayFourDate}</div>
        <div>H: {Math.round(props.dayFourHighTemp)}</div>
        <div>L: {Math.round(props.dayFourLowTemp)}</div>
      </div>
      <div>
        <div>{props.dayFiveDate}</div>
        <div>H: {Math.round(props.dayFiveHighTemp)}</div>
        <div>L: {Math.round(props.dayFiveLowTemp)}</div>
      </div>
      <div>
        <div>{props.daySixDate}</div>
        <div>H: {Math.round(props.daySixHighTemp)}</div>
        <div>L: {Math.round(props.dayOneLowTemp)}</div>
      </div>
    </div>
  );
};

export default WeeklyWeatherDisplay;
