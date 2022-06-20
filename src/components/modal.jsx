import React from 'react';
import Button from './button';
import "../styles/modal.css"

import ModalContent from './modal_content';

const Modal = ({ content, onClick, show }) => {
	return (
		<>
			<div className={`${show ? 'active' : 'inactive'} modal`}>
				<div>
					<ModalContent content={content} />
					<Button name='Close' onClick={onClick} />
				</div>
			</div>
		</>
	);
};

export default Modal;
