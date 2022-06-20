import React, { useState, useEffect } from 'react';

import Selector from './selector';
import Button from './button';
import List from './list';
import Modal from './modal';
import Counter from './counter';
import PayWindow from './pay_window';
import Settings from './settings';

import onClickSetCounter from '../functions/onClickSetCounter';

import phaseList from '../data/phaseList';
import armyList from '../data/armyList';
import stratagemListMerged from '../data/stratagemListMerged';

import '../styles/app.css';

const App = () => {
	const [selectedPhase, setSelectedPhase] = useState(phaseList[0]);
	const [selectedArmy, setSelectedArmy] = useState(armyList[0]);
	const [commandPoints, setCommandPoints] = useState(12);
	const [whoseShow, setWhoseShow] = useState(true);

	const [showModalCore, setShowModalCore] = useState(false);
	const [showModalBefore, setShowModalBefore] = useState(false);
	const [showModalSmall, setShowModalSmall] = useState(false);

	const [itemName, setitemName] = useState('');
	const [itemCost, setitemCost] = useState(0);
	const [DarkModeOn, setDarkModeOn] = useState(true);
	const [isPageOnTop, setisPageOnTop] = useState(false);

	//^States

	useEffect(() => {
		document.addEventListener('scroll', trackScrolling);
	});

	const trackScrolling = () => {
		if (window.pageYOffset === 0) {
			setisPageOnTop(true);
		} else {
			setisPageOnTop(false);
		}
	};

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

	const callbackBuy = (name, cost) => {
		setitemName(name);
		setitemCost(parseInt(cost));
		setShowModalSmall((prevState) => !prevState);
		setShowModalCore(false);
		setShowModalBefore(false);
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
		(el) =>
			el.whose.toLowerCase() === 'mine' || el.whose.toLowerCase() === 'both'
	);
	const enemyPhase = selectedPhaseStratagems.filter(
		(el) =>
			el.whose.toLowerCase() === 'enemy' || el.whose.toLowerCase() === 'both'
	);

	const coreStratagems = stratagemListMerged.filter(
		(el) => el.faction.toLowerCase() === 'core'
	);

	const beforeStratagems = stratagemListMerged
		.filter((el) => el.phase === 'Before the Battle')
		.filter((el) => el.faction.toLowerCase() === selectedArmy.toLowerCase());

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

	const contentCore = (
		<List
			title='Core Stratagems:'
			listArr={coreStratagems}
			callback={callbackBuy}
		/>
	);
	const contentBefore = (
		<List
			title='Before the Battle Stratagems:'
			listArr={beforeStratagems}
			callback={callbackBuy}
		/>
	);

	return (
		<>
			{isPageOnTop ? (
				<Settings mode={DarkModeOn} callback={setDarkModeOn} />
			) : null}
			<Modal
				content={contentSmall}
				onClick={() => {
					setShowModalSmall((prevState) => !prevState);
				}}
				show={showModalSmall}
			/>
			<Modal
				content={contentCore}
				onClick={() => {
					setShowModalCore((prevState) => !prevState);
				}}
				show={showModalCore}
			/>
			<Modal
				content={contentBefore}
				onClick={() => {
					setShowModalBefore((prevState) => !prevState);
				}}
				show={showModalBefore}
			/>
			<div className='wrapper flex-column'>
				<div className='nav'>
					<div className='flex-row'>
						<Selector
							title='Phase:'
							value={selectedPhase}
							type='Phase Select'
							list={phaseList}
							callback={(value) => setSelectedPhase(value)}
						/>
						<Selector
							title='Army:'
							value={selectedArmy}
							type='Army Select'
							list={armyList}
							callback={(value) => setSelectedArmy(value)}
						/>
					</div>
					<div className='flex-row space-around'>
						<Button name='Previous phase' onClick={() => onClickNav('prev')} />
						<Button name='Next phase' onClick={() => onClickNav('next')} />
					</div>
				</div>

				<Counter
					counter={commandPoints}
					currency='CP'
					onClickAdd={() => onClickSetCounter(setCommandPoints, 'add', 1)}
					onClickSub={() => onClickSetCounter(setCommandPoints, 'sub', 1)}
				/>
				<div className='stratagems flex-column'>
					<h1>Stratagems:</h1>
					<div className='stratagem-btn-container'>
						<Button
							name={`${
								whoseShow
									? 'Show enemy phase Stratagems'
									: 'Show my phase Stratagems'
							}`}
							onClick={() => {
								setWhoseShow((prevState) => !prevState);
							}}
						/>
						<Button
							name={
								showModalCore ? 'Hide Core Stratagems' : 'Show Core Stratagems'
							}
							onClick={() => {
								setShowModalCore((prevState) => !prevState);
							}}
						/>
						<Button
							name={
								showModalBefore
									? 'Hide Before the Battle Stratagems'
									: 'Show Before the Battle Stratagems'
							}
							onClick={() => {
								setShowModalBefore((prevState) => !prevState);
							}}
						/>
					</div>
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
				</div>
			</div>
		</>
	);
};

export default App;
