import React from 'react';
import '../styles/modal.css';

function Modal({ content, onClick, show }) {
  return (
    <div className={`${show ? 'active' : 'inactive'} shadow`}>
      <div className='modal flex-column'>
        <div className='modal-container'>{content}</div>
        <div className='modal-btn-container'>
          <button type='button' className='btn' onClick={onClick}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
