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

const WeatherApi = (props) => {
  // Day 0 (Current day ) variables
  const [currentTemp, setCurrentTemp] = useState('');
  const [currentWeather, setCurrentWeather] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [icon, setIcon] = useState('');

  // Day 1 variables
  const [dayOneDate, setDayOneDate] = useState('');
  const [dayOneTemp, setDayOneTemp] = useState('');
  const [dayOneWeather, setDayOneWeather] = useState('');

  // Day 2 variables
  const [dayTwoDate, setDayTwoDate] = useState('');
  const [dayTwoTemp, setDayTwoTemp] = useState('');
  const [dayTwoWeather, setDayTwoWeather] = useState('');

  // Day 3 variables
  const [dayThreeDate, setDayThreeDate] = useState('');
  const [dayThreeTemp, setDayThreeTemp] = useState('');
  const [dayThreeWeather, setDayThreeWeather] = useState('');

  // Day 4 variables
  const [dayFourDate, setDayFourDate] = useState('');
  const [dayFourTemp, setDayFourTemp] = useState('');
  const [dayFourWeather, setDayFourWeather] = useState('');

  // Day 5 variables
  const [dayFiveDate, setDayFiveDate] = useState('');
  const [dayFiveTemp, setDayFiveTemp] = useState('');
  const [dayFiveWeather, setDayFiveWeather] = useState('');

  // Day 6 variables
  const [daySixDate, setDaySixDate] = useState('');
  const [daySixTemp, setDaySixTemp] = useState('');
  const [daySixWeather, setDaySixWeather] = useState('');

  //Background image variables
  const [bgImage, setBgImage] = useState(main);

  useEffect(() => {
    handleImage(currentWeather, currentTemp);
  }, [currentWeather]);

  // Pulls lon and lan info from the Api then sets the vatiables with the data
  const getLatLon = (callback) => {
    if (props.zipCode) {
      const key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
      const locationUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${props.zipCode},us&appid=${key}&units=imperial`;
      axios
        .get(locationUrl)
        .then((res) => {
          setCurrentLocation(res.data.name);
          callback(res.data.coord.lon, res.data.coord.lat);
          console.log(res.data);
        })
        // Alert user if they input an incorrect zip code
        // .catch(() => alert('Invalid Zip Code'));
        .catch((err) => console.log(err));
      // } else {
      //   // Alert user if they request weather info when the input is empty
      //   alert('Please Enter A Zip Code');
    }
  };

  // Calls for weekly weather data
  const getWeather = (lon, lat) => {
    if (lon && lat) {
      const key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
      const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;
      axios
        .get(weatherUrl)
        .then((res) => {
          setCurrentTemp(res.data.current.temp);
          setCurrentWeather(res.data.current.weather[0].main);
          console.log(res.data);
          setDayOneDate(new Date(res.data.daily[1].dt));
          setDayTwoDate(new Date(res.data.daily[2].dt));
          setDayThreeDate(new Date(res.data.daily[3].dt));
          setDayFourDate(new Date(res.data.daily[4].dt));
          setDayFiveDate(new Date(res.data.daily[5].dt));
          setDaySixDate(new Date(res.data.daily[6].dt));
        })
        .catch((err) => console.log(err));
    }
  };

  // Conditionally displays image depending on CurrentWeather
  const handleImage = (currentWeather, currentTemp) => {
    switch (true) {
      case currentWeather === 'Snow':
      case currentWeather === '' && currentTemp < 10:
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
          onClick={() => getLatLon(getWeather)}
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
      <a href="https://www.freepik.com/vectors/winter">
        Winter vector created by pch.vector - www.freepik.com
      </a>
    </div>
  );
};
export default WeatherApi;
