import React, { useState } from 'react';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';

const Location = () => {
  const [zipCode, setZipCode] = useState('');

  return (
    <div>
      <form>
        <lable>
          Please enter Your Zip Code:
          <input
            type="text"
            name="zipCode"
            onChange={(e) => setZipCode(e.target.value)}
          />
        </lable>
      </form>
      <WeatherDisplay zipCode={zipCode} />
    </div>
  );
};

export default Location;
