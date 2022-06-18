import React from 'react';

import listItemGenerator from '../functions/listItemGenerator';

import '../styles/list.css';

const List = ({ title, listArr }) => {


	const listItemList = listItemGenerator(listArr);

	return (
		<>
			<div>
				{listArr.length ? <h2>{title}</h2> : null}
				{listItemList}
			</div>
		</>
	);
};

export default List;
