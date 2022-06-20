import React from 'react';
import Button from './button';

const Settings = ({ mode, callback }) => {
	const switchLight = () => {
		document.documentElement.style.setProperty(
			'--bg-primary-color',
			'rgb(200, 200, 200)'
		);
		document.documentElement.style.setProperty(
			'--bg-secondary-color',
			'rgb(240, 240, 240)'
		);
		document.documentElement.style.setProperty(
			'--bg-tertiary-color',
			'rgb(250, 250, 250)'
		);
		document.documentElement.style.setProperty(
			'--bg-quaternary-color',
			'rgb(220, 220, 220)'
		);
		document.documentElement.style.setProperty('--text-color', 'rgb(0, 0, 0)');
		callback(false);
	};
	const switchDark = () => {
		document.documentElement.style.setProperty(
			'--bg-primary-color',
			'rgb(43, 43, 43)'
		);
		document.documentElement.style.setProperty(
			'--bg-secondary-color',
			'rgb(66, 66, 66)'
		);
		document.documentElement.style.setProperty(
			'--bg-tertiary-color',
			'rgb(121, 121, 121)'
		);
		document.documentElement.style.setProperty(
			'--bg-quaternary-color',
			'rgb(51, 51, 51)'
		);
		document.documentElement.style.setProperty(
			'--text-color',
			'rgb(255, 255, 255)'
		);
		callback(true);
	};

	return (
		<>
			{mode ? (
				<Button name='Switch to Light Mode' onClick={switchLight} />
			) : (
				<Button name='Switch to Dark Mode' onClick={switchDark} />
			)}
		</>
	);
};

export default Settings;
