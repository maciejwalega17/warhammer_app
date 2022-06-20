import React from 'react';
import Button from '../components/button';

const buttonGenerator = (cost, callback, name) => {
	const costSplit = cost.split('/');
	const btnArr = [];
	costSplit.forEach((el) => {
		btnArr.push(
			<Button
				key={name + el}
				name={`${el} CP`}
				onClick={() => {
					callback(name, el);
				}}
			/>
		);
	});
	return btnArr;
};

export default buttonGenerator;
