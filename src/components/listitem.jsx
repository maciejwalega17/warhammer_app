import React from 'react';
import Button from './button';

const ListItem = ({
	name,
	cost,
	category,
	phase,
	text,
	keywords,
	callback,
}) => {
	const buttons = (cost) => {
		if (cost === '1/2') {
			return (
				<>
					<Button
						name={`1 CP`}
						onClick={() => {
							callback(name, 1);
						}}
					/>
					<Button
						name={`2 CP`}
						onClick={() => {
							callback(name, 2);
						}}
					/>
				</>
			);
		} else {
			return (
				<Button
					name={`${cost} CP`}
					onClick={() => {
						callback(name, cost);
					}}
				/>
			);
		}
	};

	return (
		<>
			<div className='flex-column list-item'>
				<div className='container-whole flex-row'>
					<div className='flex-column container-left'>
						<p className='name'>{name}</p>
						<p className='category'>{category}</p>
					</div>
					<div className='flex-column container-right'>
						<p className='cost'>{buttons(cost)}</p>
						<p className='phase'>{phase}</p>
					</div>
				</div>
				<p className='text'>{text}</p>
				<p className='keywords'>KEYWORDS: {keywords}</p>
			</div>
		</>
	);
};

export default ListItem;
