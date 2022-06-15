import React from 'react';
import Option from './option';

const Selector = ({ type, list }) => {
	const optionList = list.map((el) => {
		return <Option value={el}></Option>;
	});

	return (
		<>
			<select name={type} id=''>
				{optionList}
			</select>
		</>
	);
};

export default Selector;
