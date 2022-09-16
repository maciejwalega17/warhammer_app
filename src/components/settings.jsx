import React from 'react';

import switchLight from '../functions/switchLight';
import switchDark from '../functions/switchDark';

import '../styles/settings.css';

function Settings({ mode, callback }) {
  const switchToLight = () => {
    switchLight();
    callback(false);
  };
  const switchToDark = () => {
    switchDark();
    callback(true);
  };

  return (
    <div className='settings-container'>
      {mode ? (
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

export default Settings;
