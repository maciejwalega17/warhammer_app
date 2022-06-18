import React from 'react';
import Button from './button';

const PayWindow = ({ itemName, cost, callback, closeCallback }) => {
	const callbackAndClose = () => {
		callback();
		closeCallback();
	};

	return (
		<>
			<div>
				<p>
					Do you want to pay {cost} CP for {itemName}?
				</p>
			</div>
			<div>
				<Button name={`Pay ${cost} CP`} onClick={callbackAndClose} />
			</div>
		</>
	);
};
export default PayWindow;
