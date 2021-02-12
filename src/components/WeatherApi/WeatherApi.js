import React, { useState } from 'react';
import axios from 'axios';
import '../../css/main.css';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';

const WeatherApi = (props) => {
  const [currentTemp, setCurrentTemp] = useState('');
  const [currentWeather, setCurrentWeather] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');

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

          console.log(res.data);
        })
        // Alert user if they input an incorrect zip code
        .catch(() => alert('Invalid Zip Code'));
    } else {
      // Alert user if they request weather info when the input is empty
      alert('Please Enter A Zip Code');
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
    </div>
  );
};
export default WeatherApi;
