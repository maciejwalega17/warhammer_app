import React from 'react';

const ListItem = ({ name, cost, category, phase, text, keywords }) => {
	return (
		<>
			<div className='flex-column list-item'>
				<div className='container-whole flex-row'>
					<div className='flex-column container-left'>
						<p className="name">{name}</p>
						<p className='category'>{category}</p>
					</div>
					<div className='flex-column container-right'>
						<p className='cost'>{cost}</p>
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
