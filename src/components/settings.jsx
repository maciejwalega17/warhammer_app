import React, { useState } from 'react';

import { switchLight } from '../utils/switchLight';
import { switchDark } from '../utils/switchDark';

import '../styles/settings.css';

export default function Settings() {
  const [darkModeOn, setDarkModeOn] = useState(true);

  const switchToLight = () => {
    switchLight();
    setDarkModeOn(false);
  };
  const switchToDark = () => {
    switchDark();
    setDarkModeOn(true);
  };

  return (
    <div className='settings-container'>
      {darkModeOn ? (
        <button type='button' className='btn' onClick={switchToLight}>
          Light Mode
        </button>
      ) : (
        <button type='button' className='btn' onClick={switchToDark}>
          Dark Mode
        </button>
      )}
    </div>
  );
}
