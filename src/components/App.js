import React, { useState } from 'react';
import Selector from './selector';
import Button from './button';

const phaseList = [
	'Command',
	'Movement',
	'Psychic',
	'Shooting',
	'Fight',
	'Morale',
];
const armyList = ['Tyranids', 'Orks'];

const App = () => {
	const [selectedPhase, setSelectedPhase] = useState(phaseList[0]);
	const [selectedArmy, setSelectedArmy] = useState(armyList[0]);

	const callbackArmy = (value) => {
		setSelectedArmy(value);
	};
	const callbackPhase = (value) => {
		setSelectedPhase(value);
	};

	const onClickNext = () => {
		if (phaseList.indexOf(selectedPhase) < phaseList.length - 1) {
			setSelectedPhase(phaseList[phaseList.indexOf(selectedPhase) + 1]);
		} else {
			setSelectedPhase(phaseList[0]);
		}
	};

	const onClickPrev = () => {
		if (phaseList.indexOf(selectedPhase) === 0) {
			setSelectedPhase(phaseList[phaseList.length - 1]);
		} else {
			setSelectedPhase(phaseList[phaseList.indexOf(selectedPhase) - 1]);
		}
	};

	return (
		<>
			<div className='wrapper'>
				<Selector
					type='Phase Select'
					list={phaseList}
					callback={callbackPhase}
				></Selector>
				<Selector
					type='Army Select'
					list={armyList}
					callback={callbackArmy}
				></Selector>
			</div>
			<div className='wrapper'>
				<Button name='Previous' onClick={onClickPrev}></Button>
				<Button name='Next' onClick={onClickNext}></Button>
			</div>
			<div className='wrapper'>
				{selectedPhase}
				{selectedArmy}
			</div>
		</>
	);
};

export default App;
