import React from 'react';
import Button from './button';
import switchLight from '../functions/switchLight';
import switchDark from '../functions/switchDark';

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
			{mode ? (
				<Button name='Switch to Light Mode' onClick={switchToLight} />
			) : (
				<Button name='Switch to Dark Mode' onClick={switchToDark} />
			)}
		</>
	);
};

export default Settings;


