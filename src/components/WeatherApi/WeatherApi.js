import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/main.css';
import main from '../../assests/images/main.jpg';
import snow from '../../assests/images/snow.jpg';
import rain from '../../assests/images/rain.jpg';
import pool from '../../assests/images/pool.jpg';
import warm from '../../assests/images/warm.jpg';
import cloudy from '../../assests/images/cloudy.jpg';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import ImageDisplay from '../ImageDisplay/ImageDisplay';
import userEvent from '@testing-library/user-event';

const WeatherApi = (props) => {
  const [currentTemp, setCurrentTemp] = useState('');
  const [currentWeather, setCurrentWeather] = useState('Weather');
  const [currentLocation, setCurrentLocation] = useState('Location');
  const [bgImage, setBgImage] = useState(main);

  useEffect(() => {
    handleImage(currentWeather, currentTemp);
  }, [currentWeather]);

  // Pulls data from the Api then sets the vatiables with the data
  const handleSubmit = () => {
    if (props.zipCode) {
      const key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${props.zipCode},us&appid=${key}&units=imperial`;
      axios
        .get(weatherUrl)
        .then((res) => {
          setCurrentTemp(res.data.main.temp);
          setCurrentWeather(res.data.weather[0].main);
          setCurrentLocation(res.data.name);
        })
        // Alert user if they input an incorrect zip code
        .catch(() => alert('Invalid Zip Code'));
    } else {
      // Alert user if they request weather info when the input is empty
      alert('Please Enter A Zip Code');
    }
  };
  // Conditionally displays image depending on CurrentWeather
  const handleImage = (currentWeather, currentTemp) => {
    switch (true) {
      case currentWeather === 'Snow':
      case currentTemp < 15:
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
      <form>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleSubmit()}
        >
          Get Weather
        </button>
      </form>
      <WeatherDisplay
        currentTemp={currentTemp}
        currentWeather={currentWeather}
        currentLocation={currentLocation}
      />
      <div className="image-display-fit-container">
        <img className="image-display-fit" src={bgImage} alt="" />
      </div>
      <a href="https://www.freepik.com/vectors/icons">
        Icons vector created by titusurya - www.freepik.com
      </a>
    </div>
  );
};
export default WeatherApi;
