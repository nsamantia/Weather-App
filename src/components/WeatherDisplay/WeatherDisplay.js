import React, { useState } from 'react';
import axios from 'axios';

const WeatherDisplay = (props) => {
  const [weatherData, setWeatherData] = useState('');

  const handleSubmit = () => {
    const key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${props.zipCode},us&appid=${key}`;
    axios
      .get(weatherUrl)
      .then((res) => {
        setWeatherData(res.data);
        console.log('called');
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <p>WeatherDisplay.js</p>
      <form>
        <button type="button" onClick={() => handleSubmit()}>
          Get Weather
        </button>
      </form>
    </div>
  );
};
export default WeatherDisplay;
