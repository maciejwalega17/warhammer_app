import React, { useState } from 'react';

import Selector from './selector';
import Button from './button';
import List from './list';
import Modal from './modal';
import CpCalculator from './cp_calculator';

import phaseList from '../data/phaseList';
import armyList from '../data/armyList';
import stratagemListMerged from '../data/stratagemListMerged';

import '../styles/App.css';

const App = () => {
	const [selectedPhase, setSelectedPhase] = useState(phaseList[0]);
	const [selectedArmy, setSelectedArmy] = useState(armyList[0]);
	const [commandPoints, setCommandPoints] = useState(12);
	const [showModal, setShowModal] = useState(false);

	const onClickNav = (params) => {
		if (params === 'next') {
			if (phaseList.indexOf(selectedPhase) < phaseList.length - 1) {
				setSelectedPhase(phaseList[phaseList.indexOf(selectedPhase) + 1]);
			} else {
				setSelectedPhase(phaseList[0]);
			}
		} else if (params === 'prev') {
			if (phaseList.indexOf(selectedPhase) === 0) {
				setSelectedPhase(phaseList[phaseList.length - 1]);
			} else {
				setSelectedPhase(phaseList[phaseList.indexOf(selectedPhase) - 1]);
			}
		}
	};

	const onClickSetCP = (params) => {
		if (params === 'add') {
			setCommandPoints((prevValue) => prevValue + 1);
		} else if (params === 'sub') {
			setCommandPoints((prevValue) => prevValue - 1);
		}
	};




	const selectedArmyStratagems = armyList.filter(
		(el) => el.faction.toLowerCase() === selectedArmy.toLowerCase()
	);
	const selectedPhaseStratagems = phaseList.filter(
		(el) =>
			el.phase.toLowerCase() === selectedPhase.toLowerCase() ||
			el.phase.toLowerCase() === 'any'
	);
	const myPhase = selectedPhaseStratagems.filter(
		(el) => el.whose === 'mine' || el.whose === 'both'
	);
	const enemyPhase = selectedPhaseStratagems.filter(
		(el) => el.whose === 'enemy' || el.whose === 'both'
	);



	return (
		<>
			<div className='wrapper'>
				<Selector
					type='Phase Select'
					list={phaseList}
					callback={(value) => setSelectedPhase(value)}
				></Selector>
				<Selector
					type='Army Select'
					list={armyList}
					callback={(value) => setSelectedArmy(value)}
				></Selector>
				<Button
					name='Show Core Stratagems'
					onClick={() => {
						setShowModal((prevState) => !prevState);
					}}
				/>
				<CpCalculator commandPoints={commandPoints} onClick={onClickSetCP} />
			</div>
			<Modal
				stratList={stratagemListMerged}
				onClick={() => {
					setShowModal((prevState) => !prevState);
				}}
				show={showModal}
			/>
			<div className='wrapper'>
				<Button name='Previous' onClick={() => onClickNav('prev')}></Button>
				<Button name='Next' onClick={() => onClickNav('next')}></Button>
			</div>
			<div className='wrapper'>
				<p>{selectedArmy}</p>
				<p>{selectedPhase}</p>
			</div>
			<h1>Stratagems:</h1>
			<div className="flex-row">
			<List
				title='Mine:' listArr={myPhase}
			></List>
			<List
				title='Enemy:' listArr={enemyPhase}
			></List>
			</div>
			
		</>
	);
};

export default App;
