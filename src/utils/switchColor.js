export const switchColor = (state) => {
	if (
		state === 'Tyranids' ||
		state === 'Orks' ||
		state === 'Aeldari' ||
		state === 'T\u2019au Empire' ||
		state === 'Aeldari (Harlequins)' ||
		state === 'Necrons'
	) {
		document.documentElement.style.setProperty(
			'--btn-color',
			'rgb(19, 168, 5)'
		);
		document.documentElement.style.setProperty(
			'--active-color',
			'rgb(27, 242, 7)'
		);
	} else if (
		state === 'Chaos Knights' ||
		state === 'Death Guard' ||
		state === 'Chaos Deamons' ||
		state === 'Chaos Space Marines'
	) {
		document.documentElement.style.setProperty(
			'--btn-color',
			'rgb(163, 22, 3)'
		);
		document.documentElement.style.setProperty(
			'--active-color',
			'rgb(250, 36, 7)'
		);
	} else {
		document.documentElement.style.setProperty(
			'--btn-color',
			'rgb(10, 145, 255)'
		);
		document.documentElement.style.setProperty(
			'--active-color',
			'rgb(10, 253, 241)'
		);
	}
};
