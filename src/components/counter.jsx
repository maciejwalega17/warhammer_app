import React from 'react';
import Button from './button';

const Counter = ({ counter, currency, onClickAdd, onClickSub }) => {
	return (
		<>
			<div>
				<div>
					<p>{counter} {currency}</p>
				</div>
				<Button name={`+ 1 ${currency}`} onClick={() => onClickAdd()} />
				<Button name={`- 1 ${currency}`} onClick={() => onClickSub()} />
			</div>
		</>
	);
};

export default Counter;
