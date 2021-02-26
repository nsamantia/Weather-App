import React, { useState, useEffect } from 'react';
import '../../css/main.css';
import Main from '../../assests/images/main.jpg';
import Snow from '../../assests/images/snow.jpg';
import Rain from '../../assests/images/rain.jpg';
import Pool from '../../assests/images/pool.jpg';
import Warm from '../../assests/images/warm.jpg';
import Cloudy from '../../assests/images/cloudy.jpg';

const ImageDisplay = (props) => {
  //Background image variables
  const [bgImage, setBgImage] = useState(Main);

  useEffect(() => {
    handleImage(props.currentWeather, props.currentTemp);
  }, [props.currentWeather]);

  // Conditionally displays image depending on CurrentWeather
  const handleImage = (currentWeather, currentTemp) => {
    switch (true) {
      case currentWeather === 'Snow':
        //   case currentTemp < 10 && currentTemp !== '':
        setBgImage(Snow);
        break;
      case currentWeather === 'Rain':
      case currentWeather === 'Mist':
        setBgImage(Rain);
        break;
      case currentWeather === 'Clear' && currentTemp > 79:
        setBgImage(Pool);
        break;
      case currentWeather === 'Clear' && currentTemp > 45 && currentTemp < 79:
        setBgImage(Warm);
        break;
      case currentWeather === 'Clouds' && currentTemp > 39 && currentTemp < 79:
        setBgImage(Cloudy);
        break;
      default:
        setBgImage(Main);
    }
  };
  return (
    <div>
      <div className="image-display-fit-container">
        <img className="image-display-fit" src={bgImage} alt="" />
      </div>
      <a className="credit" href="https://www.freepik.com/vectors/winter">
        Winter vector created by pch.vector - www.freepik.com
      </a>
    </div>
  );
};

export default ImageDisplay;
