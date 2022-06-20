import React from 'react';
import Button from './button';
import switchLight from '../functions/switchLight';
import switchDark from '../functions/switchDark';

import '../styles/settings.css';

const Settings = ({ mode, callback }) => {
	const switchToLight = () => {
		switchLight();
		callback(false);
	};
	const switchToDark = () => {
		switchDark();
		callback(true);
	};

	return (
		<>
			
			<div className='settings-container'>
				{mode ? (
					<Button name='Light Mode' onClick={switchToLight} />
				) : (
					<Button name='Dark Mode' onClick={switchToDark} />
				)}
			</div>
		</>
	);
};

export default Settings;
