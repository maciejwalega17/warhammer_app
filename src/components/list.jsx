import React from 'react';
import ListItem from './listitem';

import '../styles/list.css';

const List = ({ stratList, selectedArmy, selectedPhase }) => {
	const selectedArmyStratagems = stratList.filter(
		(el) =>
			el.faction.toLowerCase() === selectedArmy.toLowerCase() ||
			el.faction.toLowerCase() === 'general'
	);
	const selectedPhaseStratagems = selectedArmyStratagems.filter((el) =>
		el.phase.toLowerCase().includes(selectedPhase.toLowerCase())
	);
	const myPhase = selectedPhaseStratagems.filter(
		(el) => el.whose === 'mine' || el.whose === 'both'
	);
	const enemyPhase = selectedPhaseStratagems.filter(
		(el) => el.whose === 'enemy' || el.whose === 'both'
	);

	const listItemGenerator = (arr) => {
		return arr.map((el, index) => {
			return (
				<ListItem
					key={index}
					name={el.name}
					cost={el.cost}
					category={el.category}
					phase={el.phase}
					text={el.text}
					keywords={el.keywords}
				/>
			);
		});
	};

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
