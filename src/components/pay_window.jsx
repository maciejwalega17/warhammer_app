import React from 'react';

import '../styles/paywindow.css';

function PayWindow({ itemName, cost, callback, closeCallback }) {
  const callbackAndClose = () => {
    callback();
    closeCallback();
  };

  return (
    <div className='pay-window'>
      <p>
        Do you want to pay {cost} CP for {itemName}?
      </p>
      <button type='button' className='btn' onClick={callbackAndClose}>
        {`Pay ${cost} CP`}
      </button>
    </div>
  );
}
export default PayWindow;
