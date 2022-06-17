import React, { useState } from 'react';

import Selector from './selector';
import Button from './button';
import List from './list';
import Modal from './modal';

import phaseList from '../data/phaseList';
import armyList from '../data/armyList';
import stratagemListMerged from '../data/stratagemListMerged';

import '../styles/App.css'



const App = () => {
	const [selectedPhase, setSelectedPhase] = useState(phaseList[0]);
	const [selectedArmy, setSelectedArmy] = useState(armyList[0]);
	const [showModal, setShowModal] = useState(false);

	const callbackArmy = (value) => {
		setSelectedArmy(value);
	};
	const callbackPhase = (value) => {
		setSelectedPhase(value);
	};

	const callbackModal = (prevValue) => {setShowModal(!prevValue)
		
	}

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
			<Modal stratList={stratagemListMerged} onClick={callbackModal} show={showModal}/>
			<div className='wrapper'>
				<Button name='Previous' onClick={onClickPrev}></Button>
				<Button name='Next' onClick={onClickNext}></Button>
			</div>
			<div className='wrapper'>
				<p>{selectedArmy}</p>
				<p>{selectedPhase}</p>
			</div>
			<List stratList={stratagemListMerged} selectedArmy={selectedArmy} selectedPhase={selectedPhase}></List>
		</>
	);
};

export default App;



