import React from 'react';

import '../styles/counter.css';

function Counter({ counter, currency, onClickAdd, onClickSub }) {
  return (
    <div className='flex-row'>
      <div className='counter-container flex-row'>
        <h3>
          {counter} {currency}
        </h3>
      </div>
      <div className='counter-btn-container flex-column'>
        <button type='button' className='btn' onClick={() => onClickAdd()}>
          {`+ 1 ${currency}`}
        </button>
        <button type='button' className='btn' onClick={() => onClickSub()}>
          {`- 1 ${currency}`}
        </button>
      </div>
    </div>
  );
}

export default Counter;
