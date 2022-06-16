import React from 'react';

const ListItem = ({ name, cost, category, phase, text, keywords }) => {
	return (
		<>
			<li>
				<div>
					<div>
						<p>{name}</p>
						<p>{category}</p>
					</div>
					<div>
						<p>{cost}</p>
						<p>{phase}</p>
					</div>
				</div>
				<p>{text}</p>
				<p>{keywords}</p>
			</li>
		</>
	);
};

export default ListItem;
