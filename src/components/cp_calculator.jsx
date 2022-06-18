import React from 'react';
import Button from './button';

const CpCalculator = ({ commandPoints, onClick }) => {
	return (
		<>
			<div>
				<div>
					<p>{commandPoints} CP</p>
				</div>
				<Button name='+ 1 CP' onClick={() => onClick('add')} />
				<Button name='- 1 CP' onClick={() => onClick('sub')} />
			</div>
		</>
	);
};

export default CpCalculator;
