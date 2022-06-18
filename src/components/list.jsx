import React from 'react';
import ListItem from './listitem';

import listItemGenerator from './functions/listItemGenerator'

import '../styles/list.css';

const List = ({ stratList, selectedArmy, selectedPhase }) => {
	const selectedArmyStratagems = stratList.filter(
		(el) =>
			el.faction.toLowerCase() === selectedArmy.toLowerCase() ||
			el.faction.toLowerCase() === 'core'
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


	const myPhaseList = listItemGenerator(myPhase);
	const enemyPhaseList = listItemGenerator(enemyPhase);

	return (
		<>
			<h1>Stratagems:</h1>
			<div className='flex-row'>
				<div>
					<h2>Mine:</h2>
					{myPhaseList}
				</div>
				<div>
					{enemyPhase.length ? <h2>Enemy:</h2> : null}
					{enemyPhaseList}
				</div>
			</div>
		</>
	);
};

export default List;
