import React, { useState } from 'react';

import Selector from './selector';
import Button from './button';
import List from './list';
import Modal from './modal';
import Counter from './counter';
import PayWindow from './pay_window';

import phaseList from '../data/phaseList';
import armyList from '../data/armyList';
import stratagemListMerged from '../data/stratagemListMerged';

import '../styles/App.css';

const App = () => {
	const [selectedPhase, setSelectedPhase] = useState(phaseList[0]);
	const [selectedArmy, setSelectedArmy] = useState(armyList[0]);
	const [commandPoints, setCommandPoints] = useState(12);
	const [whoseShow, setWhoseShow] = useState(true);

	const [showModalBig, setShowModalBig] = useState(false);
	const [showModalSmall, setShowModalSmall] = useState(false);

	const [itemName, setitemName] = useState('');
	const [itemCost, setitemCost] = useState(0);

	//^States
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

	const onClickSetCounter = (callback, params, value) => {
		if (params === 'add') {
			callback((prevValue) => prevValue + value);
		} else if (params === 'sub') {
			callback((prevValue) => prevValue - value);
		}
	};

	const callbackBuy = (name, cost) => {
		setitemName(name);
		setitemCost(parseInt(cost));
	};
	//^changing states

	const selectedArmyStratagems = stratagemListMerged.filter(
		(el) => el.faction.toLowerCase() === selectedArmy.toLowerCase()
	);
	const selectedPhaseStratagems = selectedArmyStratagems.filter(
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

	const coreStratagems = stratagemListMerged.filter(
		(el) => el.faction.toLowerCase() === 'core'
	);

	//^stratagem list filtering
	const contentSmall = (
		<PayWindow
			itemName={itemName}
			cost={itemCost}
			callback={() => {
				onClickSetCounter(setCommandPoints, 'sub', itemCost);
			}}
			closeCallback={() => {
				setShowModalSmall((prevState) => !prevState);
			}}
		/>
	);

	const contentBig = (
		<List
			title='Core Stratagems:'
			listArr={coreStratagems}
			callback={callbackBuy}
		/>
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
						setShowModalBig((prevState) => !prevState);
					}}
				/>
				<Button
					name='pop'
					onClick={() => {
						setShowModalSmall((prevState) => !prevState);
					}}
				/>
				<Modal
					content={contentSmall}
					onClick={() => {
						setShowModalSmall((prevState) => !prevState);
					}}
					show={showModalSmall}
				/>
				<Counter
					counter={commandPoints}
					currency='CP'
					onClickAdd={() => onClickSetCounter(setCommandPoints, 'add', 1)}
					onClickSub={() => onClickSetCounter(setCommandPoints, 'sub', 1)}
				/>
			</div>
			<Modal
				content={contentBig}
				onClick={() => {
					setShowModalBig((prevState) => !prevState);
				}}
				show={showModalBig}
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
			<Button
				name={`${
					whoseShow ? 'Show enemy phase Stratagems' : 'Show my phase Stratagems'
				}`}
				onClick={() => {
					setWhoseShow((prevState) => !prevState);
				}}
			/>

			<div className='flex-row'>
				{whoseShow ? (
					<List
						title='My phase:'
						listArr={myPhase}
						callback={callbackBuy}
					></List>
				) : (
					<List
						title='Enemy phase:'
						listArr={enemyPhase}
						callback={callbackBuy}
					></List>
				)}
			</div>
		</>
	);
};

export default App;
