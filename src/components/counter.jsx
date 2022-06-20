import React from 'react';
import Button from './button';

import '../styles/counter.css';

const Counter = ({ counter, currency, onClickAdd, onClickSub }) => {
	return (
		<>
			<div className='flex-row'>
				<div className='counter-container flex-row'>
					<h3>
						{counter} {currency}
					</h3>
				</div>
				<div className='counter-btn-container flex-column'>
					<Button name={`- 1 ${currency}`} onClick={() => onClickSub()} />
					<Button name={`+ 1 ${currency}`} onClick={() => onClickAdd()} />
				</div>
			</div>
		</>
	);
};

export default Counter;
