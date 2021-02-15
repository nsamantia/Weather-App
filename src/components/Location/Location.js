import React, { useState } from 'react';
import WeatherApi from '../WeatherApi/WeatherApi';
import '../../css/main.css';

const Location = () => {
  const [zipCode, setZipCode] = useState('');

  return (
    <div className="text-center">
      <p>Current Weather</p>
      <form className="">
        <input
          type="text"
          name="zipCode"
          className="floatingInput"
          placeholder="Enter Your Zip Code"
          onChange={(e) => setZipCode(e.target.value)}
        />
      </form>
      <WeatherApi zipCode={zipCode} />
    </div>
  );
};

export default Location;
