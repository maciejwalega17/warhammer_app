import React from 'react';
import Option from './option';

const Selector = ({ type, list, callback }) => {
	const optionList = list.map((el, index) => {
		return <Option value={el} key={index}></Option>;
	});

	return (
		<>
			<select name={type} onChange={(e) => callback(e.target.value)}>
				{optionList}
			</select>
		</>
	);
};

export default Selector;
