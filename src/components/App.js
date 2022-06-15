import React, { useState } from 'react';
import Selector from './selector';

const App = () => {
	const [selectedPhase, setSelectedPhase] = useState('Command');
	const [selectedArmy, setSelectedArmy] = useState('Tyranids');

	const phaseList = [
		'Command',
		'Movement',
		'Psychic',
		'Shooting',
		'Fight',
		'Morale',
	];
	const armyList = ['Tyranids', 'Orks'];

	const callbackArmy = (value) => {
		setSelectedArmy(value);
	};
	const callbackPhase = (value) => {
		setSelectedPhase(value);
	};

	return (
		<>
			<div className='wrapper'>
				<Selector type='Phase Select' list={phaseList} callback={callbackPhase}></Selector>
				<Selector type='Army Select' list={armyList} callback={callbackArmy}></Selector>
			</div>
			<div className='wrapper'>
				<button>Back</button>
				<button>Forward</button>
			</div>
			<div className='wrapper'>
				{selectedPhase}
				{selectedArmy}
			</div>
		</>
	);
};

export default App;

//<input type="text" placeholder="dodaj zadanie" value={this.state.text} onChange={this.handleText} />
// <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheckbox} />

//  handleText = (e) => {
//   this.setState({
//     text: e.target.value
//   })
// }

// handleCheckbox = (e) => {
//   this.setState({
//     checked: e.target.checked
//   })
// }
