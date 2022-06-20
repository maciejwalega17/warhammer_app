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
};

export default switchLight;
