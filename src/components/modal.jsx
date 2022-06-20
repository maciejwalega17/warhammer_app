import React from 'react';
import Button from './button';
import '../styles/modal.css';

import ModalContent from './modal_content';

const Modal = ({ content, onClick, show }) => {
	return (
		<>
			<div className={`${show ? 'active' : 'inactive'} modal`}>
				<div className='modal-container'>
					<ModalContent content={content} />
				</div>
				<div className='modal-btn-container'>
					<Button name='Close' onClick={onClick} />
				</div>
			</div>
		</>
	);
};

export default Modal;
