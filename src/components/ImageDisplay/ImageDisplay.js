import React, { useState, useEffect } from 'react';
import '../../css/main.css';
import main from '../../assests/images/main.jpg';
import snow from '../../assests/images/snow.jpg';
import rain from '../../assests/images/rain.jpg';
import pool from '../../assests/images/pool.jpg';
import warm from '../../assests/images/warm.jpg';
import cloudy from '../../assests/images/cloudy.jpg';

const ImageDisplay = (props) => {
  //Background image variables
  const [bgImage, setBgImage] = useState(main);

  useEffect(() => {
    handleImage(props.currentWeather, props.currentTemp);
  }, [props.currentWeather]);

  // Conditionally displays image depending on CurrentWeather
  const handleImage = (currentWeather, currentTemp) => {
    switch (true) {
      case currentWeather === 'Snow':
        //   case currentTemp < 10 && currentTemp !== '':
        setBgImage(snow);
        break;
      case currentWeather === 'Rain':
      case currentWeather === 'Mist':
        setBgImage(rain);
        break;
      case currentWeather === 'Clear' && currentTemp > 79:
        setBgImage(pool);
        break;
      case currentWeather === 'Clear' && currentTemp > 45 && currentTemp < 79:
        setBgImage(warm);
        break;
      case currentWeather === 'Clouds' && currentTemp > 39 && currentTemp < 79:
        setBgImage(cloudy);
        break;
      default:
        setBgImage(main);
    }
  };
  return (
    <div>
      <div className="image-display-fit-container">
        <img className="image-display-fit" src={bgImage} alt="" />
      </div>
      <a href="https://www.freepik.com/vectors/winter">
        Winter vector created by pch.vector - www.freepik.com
      </a>
    </div>
  );
};

export default ImageDisplay;
