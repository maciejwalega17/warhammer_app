import React from 'react';
import '../styles/PaymentModal.css';

export default function PaymentModal({ item, onSuccess, onCancel }) {
  return (
    <div className='active shadow'>
      <div className='modal flex-column'>
        <div className='modal-container'>
          <div className='pay-window'>
            <p>
              Do you want to pay {item.cost} CP for {item.name}?
            </p>
            <button type='button' className='btn' onClick={onSuccess}>
              {`Pay ${item.cost} CP`}
            </button>
          </div>
        </div>
        <div className='modal-btn-container'>
          <button type='button' className='btn' onClick={onCancel}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
