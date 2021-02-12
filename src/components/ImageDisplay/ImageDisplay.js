import React, { useState } from 'react';
import main from '../../assests/images/main.jpg';
import snow from '../../assests/images/snow.jpg';
import rain from '../../assests/images/rain.jpg';
import '../../css/main.css';

const ImageDisplay = (props) => {
  const [bgImage, setBgImage] = useState('');

  if (props.currentWeather === 'Snow') {
    setBgImage(snow);
  } else if (props.currentWeather === 'Rain') {
    setBgImage(rain);
  } else {
    setBgImage(main);
  }
  return (
    <div>
      <div className="image-display-fit-container">
        <img className="image-display-fit" src={bgImage} alt="" />
      </div>
    </div>
  );
};

export default ImageDisplay;
