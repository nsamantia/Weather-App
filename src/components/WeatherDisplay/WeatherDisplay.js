import React, { useState } from 'react';

const WeatherDisplay = (props) => {
  const [weatherData, setWeatherData] = useState('');

  const handleSubmit = () => {
    const key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
    const weatherUrl = `api.openweathermap.org/data/2.5/weather?zip=${props.zipCode},{code}&appid=${key}`;
    fetch(weatherUrl).then((res) => {
      setWeatherData(res.data);
      console.log(res.data);
    });
  };
  return (
    <div>
      <p>WeatherDisplay.js</p>
      <form>
        <input type="submit" onClick={handleSubmit()} />
      </form>
    </div>
  );
};
export default WeatherDisplay;
