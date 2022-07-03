import React, { useState, useEffect } from 'react';

import Selector from './selector';
import Button from './button';
import List from './list';
import Modal from './modal';
import Counter from './counter';
import PayWindow from './pay_window';
import Settings from './settings';

import onClickSetCounter from '../functions/onClickSetCounter';
import subfactionListGenerator from '../functions/subfactionListGenerator';

import phaseList from '../data/phaseList';
import armyList from '../data/armyList';
import stratagemListMerged from '../data/stratagemListMerged';

import '../styles/app.css';
import switchColor from '../functions/switchColor';

const App = () => {
	const [selectedPhase, setSelectedPhase] = useState(phaseList[0]);
	const [selectedArmy, setSelectedArmy] = useState(armyList[0]);
	const [selectedSubfaction, setSelectedSubfaction] = useState('');
	const [commandPoints, setCommandPoints] = useState(12);
	const [listShow, setlistShow] = useState('mine');

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

	const listTitleGenerator = () => {
		if (listShow === 'mine') {
			return 'My turn Stratagems:';
		} else if (listShow === 'enemy') {
			return 'Enemy turn Stratagems:';
		} else if (listShow === 'core') {
			return 'Core Stratagems:';
		} else if (listShow === 'before') {
			return 'Before the Battle Stratagems:';
		}
	};
	const listArrGenerator = () => {
		if (listShow === 'mine') {
			return myPhase;
		} else if (listShow === 'enemy') {
			return enemyPhase;
		} else if (listShow === 'core') {
			return coreStratagems;
		} else if (listShow === 'before') {
			return beforeStratagems;
		}
	};

	const listTitle = listTitleGenerator();
	const listArr = listArrGenerator();
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

	const btnStyleChanger = (props) => {
		return listShow === props ? 'clicked' : null;
	};
	switchColor(selectedArmy);

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

			<div className='wrapper flex-column'>
				<div className='nav '>
					<div className='flex-row space-around'>
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
						<Selector
							title='Subfaction:'
							value={selectedSubfaction}
							type='Army Select'
							list={subfactionListGenerator(selectedArmy)}
							callback={(value) => setSelectedSubfaction(value)}
						/>
					</div>
					<div className='flex-row space-around nav-container'>
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
					<div className='stratagem-btn-container flex-row'>
						<div className={btnStyleChanger('mine')}>
							<Button
								name='Show my phase Stratagems'
								onClick={() => setlistShow('mine')}
							/>
						</div>
						<div className={btnStyleChanger('enemy')}>
							<Button
								name='Show enemy phase Stratagems'
								onClick={() => setlistShow('enemy')}
							/>
						</div>
					</div>
					<div className='stratagem-btn-container flex-row'>
						<div className={btnStyleChanger('core')}>
							<Button
								name='Show Core Stratagems'
								onClick={() => setlistShow('core')}
							/>
						</div>
						<div className={btnStyleChanger('before')}>
							<Button
								name='Before the Battle Stratagems'
								onClick={() => setlistShow('before')}
							/>
						</div>
					</div>
					<div className='flex-row'>
						<List
							title={listTitle}
							listArr={listArr}
							callback={callbackBuy}
						></List>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
