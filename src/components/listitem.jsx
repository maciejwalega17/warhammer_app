import React from 'react';

const ListItem = ({ name, cost, category, phase, text, keywords }) => {
	return (
		<>
			<div>
				<div>
					<div>
						<h3>{name}</h3>
						<p>{category}</p>
					</div>
					<div>
						<p>{cost}</p>
						<p>{phase}</p>
					</div>
				</div>
				<p>{text}</p>
				<p>{keywords}</p>
			</div>
		</>
	);
};

export default ListItem;
