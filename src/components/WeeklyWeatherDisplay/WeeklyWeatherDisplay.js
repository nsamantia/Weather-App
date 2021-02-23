import React from 'react';

const WeeklyWeatherDisplay = (props) => {
  return (
    <div className="week-container text-center">
      <div>
        <p>
          <br />
        </p>
        <p>High</p>
        <p>Low</p>
      </div>
      <div></div>
      <div>
        <p>{props.dayOneDate}</p>
        <p>{Math.round(props.dayOneHighTemp)}</p>
        <p>{Math.round(props.dayOneLowTemp)}</p>
      </div>
      <div>
        <p>{props.dayTwoDate}</p>
        <p>{Math.round(props.dayTwoHighTemp)}</p>
        <p>{Math.round(props.dayTwoLowTemp)}</p>
      </div>
      <div>
        <p>{props.dayThreeDate}</p>
        <p>{Math.round(props.dayThreeHighTemp)}</p>
        <p>{Math.round(props.dayThreeLowTemp)}</p>
      </div>
      <div>
        <p>{props.dayFourDate}</p>
        <p>{Math.round(props.dayFourHighTemp)}</p>
        <p>{Math.round(props.dayFourLowTemp)}</p>
      </div>
      <div>
        <p>{props.dayFiveDate}</p>
        <p>{Math.round(props.dayFiveHighTemp)}</p>
        <p>{Math.round(props.dayFiveLowTemp)}</p>
      </div>
      <div>
        <p>{props.daySixDate}</p>
        <p>{Math.round(props.daySixHighTemp)}</p>
        <p>{Math.round(props.dayOneLowTemp)}</p>
      </div>
    </div>
  );
};

export default WeeklyWeatherDisplay;
