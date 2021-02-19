import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/main.css';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import ImageDisplay from '../ImageDisplay/ImageDisplay';

const WeatherApi = (props) => {
  // Day 0 (Current day ) variables
  const [currentTemp, setCurrentTemp] = useState('');
  const [currentWeather, setCurrentWeather] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [icon, setIcon] = useState('');

  // Day 1 variables
  const [dayOneDate, setDayOneDate] = useState('');
  const [dayOneHighTemp, setDayOneHighTemp] = useState('');
  const [dayOneLowTemp, setDayOneLowTemp] = useState('');
  const [dayOneWeather, setDayOneWeather] = useState('');

  // Day 2 variables
  const [dayTwoDate, setDayTwoDate] = useState('');
  const [dayTwoHighTemp, setDayTwoHighTemp] = useState('');
  const [dayTwoLowTemp, setDayTwoLowTemp] = useState('');
  const [dayTwoWeather, setDayTwoWeather] = useState('');

  // Day 3 variables
  const [dayThreeDate, setDayThreeDate] = useState('');
  const [dayThreeHighTemp, setDayThreeHighTemp] = useState('');
  const [dayThreeLowTemp, setDayThreeLowTemp] = useState('');
  const [dayThreeWeather, setDayThreeWeather] = useState('');

  // Day 4 variables
  const [dayFourDate, setDayFourDate] = useState('');
  const [dayFourHighTemp, setDayFourHighTemp] = useState('');
  const [dayFourLowTemp, setDayFourLowTemp] = useState('');
  const [dayFourWeather, setDayFourWeather] = useState('');

  // Day 5 variables
  const [dayFiveDate, setDayFiveDate] = useState('');
  const [dayFiveHighTemp, setDayFiveHighTemp] = useState('');
  const [dayFiveLowTemp, setDayFiveLowTemp] = useState('');
  const [dayFiveWeather, setDayFiveWeather] = useState('');

  // Day 6 variables
  const [daySixDate, setDaySixDate] = useState('');
  const [daySixHighTemp, setDaySixHighTemp] = useState('');
  const [daySixLowTemp, setDaySixLowTemp] = useState('');
  const [daySixWeather, setDaySixWeather] = useState('');

  // Pulls lon and lan info from the Api then sets the vatiables with the data
  const getLatLon = (callback, callback2, callback3) => {
    if (props.zipCode) {
      const key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
      const locationUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${props.zipCode},us&appid=${key}&units=imperial`;
      axios
        .get(locationUrl)
        .then((res) => {
          setCurrentLocation(res.data.name);
          // getDates function
          callback(res.data.coord.lon, res.data.coord.lat);
          // getWeather function
          callback2(res.data.coord.lon, res.data.coord.lat);
          // getDates function
          callback3(res.data.coord.lon, res.data.coord.lat);
        })
        // Alert user if they input an incorrect zip code
        .catch(() => alert('Invalid Zip Code'));
    } else {
      // Alert user if they request weather info when the input is empty
      alert('Please Enter A Zip Code');
    }
  };

  // Calls for weekly weather data
  const getDates = (lon, lat) => {
    if (lon && lat) {
      const key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
      const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;
      axios
        .get(weatherUrl)
        .then((res) => {
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

  const getWeather = (lon, lat) => {
    if (lon && lat) {
      const key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
      const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;
      axios
        .get(weatherUrl)
        .then((res) => {
          setCurrentWeather(res.data.current.weather[0].main);
          setDayOneWeather(res.data.daily[1].weather[0].main);
          setDayTwoWeather(res.data.daily[2].weather[0].main);
          setDayThreeWeather(res.data.daily[3].weather[0].main);
          setDayFourWeather(res.data.daily[4].weather[0].main);
          setDayFiveWeather(res.data.daily[5].weather[0].main);
          setDaySixWeather(res.data.daily[6].weather[0].main);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  const getTemps = (lon, lat) => {
    if (lon && lat) {
      const key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
      const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;
      axios
        .get(weatherUrl)
        .then((res) => {
          // High temps
          setCurrentTemp(res.data.current.temp);
          setDayOneHighTemp(res.data.daily[1].temp.max);
          setDayTwoHighTemp(res.data.daily[2].temp.max);
          setDayThreeHighTemp(res.data.daily[3].temp.max);
          setDayFourHighTemp(res.data.daily[4].temp.max);
          setDayFiveHighTemp(res.data.daily[5].temp.max);
          setDaySixHighTemp(res.data.daily[6].temp.max);

          // Low temps
          setDayOneLowTemp(res.data.daily[1].temp.min);
          setDayTwoLowTemp(res.data.daily[2].temp.min);
          setDayThreeLowTemp(res.data.daily[3].temp.min);
          setDayFourLowTemp(res.data.daily[4].temp.min);
          setDayFiveLowTemp(res.data.daily[5].temp.min);
          setDaySixLowTemp(res.data.daily[6].temp.min);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <form>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => getLatLon(getDates, getWeather, getTemps)}
        >
          Get Weather
        </button>
      </form>
      <WeatherDisplay
        currentTemp={currentTemp}
        currentWeather={currentWeather}
        currentLocation={currentLocation}
      />

      <ImageDisplay currentWeather={currentWeather} currentTemp={currentTemp} />
    </div>
  );
};
export default WeatherApi;
