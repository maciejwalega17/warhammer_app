import React from 'react';
import ListItem from './listitem';
import Button from './button';

const Modal = ({stratList, onClickModal, show}) => {
    
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
    <div className={`flex-column ${show ? 'active' : 'inactive '}`}>
        <h2>Core Stratagems:</h2>
        {coreList}
        <Button name='Close' onClick={onClickModal}/>
    </div>
    </>);
};

export default Modal;
