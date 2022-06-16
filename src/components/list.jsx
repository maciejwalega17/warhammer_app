import React from 'react';
import ListItem from './listitem';

const List = ({stratList}) => {
    const dataArr = stratList.map((el, index) => {
        return (
        <ListItem key={index} name={el.name} cost={el.cost} category={el.category} phase={el.phase} text={el.text} keywords={el.keywords} />
        )
    })


	return (
		<>
			<h2>Stratagems:</h2>
            {dataArr}
		</>
	);
};

export default List;



