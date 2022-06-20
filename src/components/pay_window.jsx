import React from 'react';
import Button from './button';
import '../styles/paywindow.css'

const PayWindow = ({ itemName, cost, callback, closeCallback }) => {
	const callbackAndClose = () => {
		callback();
		closeCallback();
	};

	return (
		<>
			<div className='pay-window'>
				<p>
					Do you want to pay {cost} CP for {itemName}?
				</p>
			
				<Button name={`Pay ${cost} CP`} onClick={callbackAndClose} />
			</div>
		</>
	);
};
export default PayWindow;
