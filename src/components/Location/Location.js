import React, { useState } from 'react';
import WeatherApi from '../WeatherApi/WeatherApi';
import '../../css/main.css';

const Location = () => {
  const [zipCode, setZipCode] = useState('');

  return (
    <div className="d-flex text-center">
      <form>
        <input
          type="text"
          name="zipCode"
          placeholder="Enter Your Zip Code"
          onChange={(e) => setZipCode(e.target.value)}
        />
      </form>
      <WeatherApi zipCode={zipCode} />
    </div>
  );
};

export default Location;
