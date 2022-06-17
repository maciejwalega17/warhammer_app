import React from 'react';
import ListItem from './listitem';
import Button from './button';

const PopUp = ({stratList, onClickClose}) => {
    
	const coreStratagems = stratList.filter(
		(el) => el.faction.toLowerCase() === 'core'
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

	const coreList = listItemGenerator(coreStratagems);



	return (<>
    <div>
        <h2>Core Stratagems:</h2>
        {coreList}
        <Button name='Close' onClick={onClickClose}/>
    </div>
    </>);
};

export default PopUp;
