import React from 'react';
import ListItem from './listitem';

const List = ({ stratList, selectedArmy, selectedPhase }) => {

	const selectedArmyStratagems = stratList.filter((el) => el.faction.toLowerCase() === selectedArmy.toLowerCase());
	const selectedPhaseStratagems = selectedArmyStratagems.filter((el) => el.phase.toLowerCase() === selectedPhase.toLowerCase());
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
			<div>
				<h1>Stratagems:</h1>
				<div>
					<h2>Mine:</h2>
					{myPhaseList}
				</div>
				<div>
					<h2>Enemy:</h2>
					{enemyPhaseList}
				</div>
			</div>
		</>
	);
};

export default List;
