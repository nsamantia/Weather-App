import React, { useState } from 'react';
import '../../css/main.css';
import Icon01d from '../../assests/icons/01d.png';
import Icon01n from '../../assests/icons/01n.png';
import Icon02d from '../../assests/icons/02d.png';
import Icon02n from '../../assests/icons/02n.png';
import Icon03d from '../../assests/icons/03d.png';
import Icon03n from '../../assests/icons/03n.png';
import Icon04d from '../../assests/icons/04d.png';
import Icon04n from '../../assests/icons/04n.png';
import Icon09d from '../../assests/icons/09d.png';
import Icon09n from '../../assests/icons/09n.png';
import Icon10d from '../../assests/icons/10d.png';
import Icon10n from '../../assests/icons/10n.png';
import Icon011d from '../../assests/icons/11d.png';
import Icon11n from '../../assests/icons/11n.png';
import Icon13d from '../../assests/icons/13d.png';
import Icon13n from '../../assests/icons/13n.png';
import Icon50d from '../../assests/icons/50d.png';
import Icon50n from '../../assests/icons/50n.png';

const WeeklyWeatherDisplay = (props) => {
  //   const [dayOneIcon, setDayOneIcon] = useState(props.dayOneIcon);
  //   console.log(dayOneIcon);
  //   console.log(props.dayOneIcon);
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
      <div className="single-day">
        <p>{props.dayOneDate}</p>
        <p>{/* <img src={dayOneIcon} alt="weather icon" /> */}</p>
        <p>{Math.round(props.dayOneHighTemp)}</p>
        <p>{Math.round(props.dayOneLowTemp)}</p>
      </div>
      <div className="single-day">
        <p>{props.dayTwoDate}</p>
        <p>{Math.round(props.dayTwoHighTemp)}</p>
        <p>{Math.round(props.dayTwoLowTemp)}</p>
      </div>
      <div className="single-day">
        <p>{props.dayThreeDate}</p>
        <p>{Math.round(props.dayThreeHighTemp)}</p>
        <p>{Math.round(props.dayThreeLowTemp)}</p>
      </div>
      <div className="single-day">
        <p>{props.dayFourDate}</p>
        <p>{Math.round(props.dayFourHighTemp)}</p>
        <p>{Math.round(props.dayFourLowTemp)}</p>
      </div>
      <div className="single-day">
        <p>{props.dayFiveDate}</p>
        <p>{Math.round(props.dayFiveHighTemp)}</p>
        <p>{Math.round(props.dayFiveLowTemp)}</p>
      </div>
      <div className="single-day">
        <p>{props.daySixDate}</p>
        <p>{Math.round(props.daySixHighTemp)}</p>
        <p>{Math.round(props.dayOneLowTemp)}</p>
      </div>
    </div>
  );
};

export default WeeklyWeatherDisplay;
