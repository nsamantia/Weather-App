import React, { useState } from 'react';
import WeatherApi from '../WeatherApi/WeatherApi';

const Location = () => {
  const [zipCode, setZipCode] = useState('');

  return (
    <div>
      <form>
        <label>
          Please enter Your Zip Code:
          <input
            type="text"
            name="zipCode"
            onChange={(e) => setZipCode(e.target.value)}
          />
        </label>
      </form>
      <WeatherApi zipCode={zipCode} />
    </div>
  );
};

export default Location;
