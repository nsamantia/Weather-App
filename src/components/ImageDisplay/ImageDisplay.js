import React, { useState } from 'react';
import main from '../../assests/images/main.jpg';
import '../../css/main.css';

const ImageDisplay = () => {
  const [bgImage, setBgImage] = useState(main);
  return (
    <div>
      <p className="test">ImageDisplay.js</p>
      <div className="image-display-fit-container">
        <img className="image-display-fit" src={bgImage} alt="" />
      </div>
    </div>
  );
};

export default ImageDisplay;
