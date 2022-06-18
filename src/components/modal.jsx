import React from 'react';
import ListItem from './listitem';
import Button from './button';
import ModalContent from './modal_content';

import listItemGenerator from './functions/listItemGenerator'

const Modal = ({stratList, onClick, show}) => {
    
	const coreStratagems = stratList.filter(
		(el) => el.faction.toLowerCase() === 'core'
	);


	const coreList = listItemGenerator(coreStratagems);


	
	return (<>
    <div className={`${show ? 'active' : 'inactive'} modal`}>
        <h2>Core Stratagems:</h2>
        {coreList}
        <Button name='Close' onClick={onClick}/>
		{/* <ModalContent children={} callback={()=>{}} */}
    </div>
    </>);
};

export default Modal;
