import React from 'react';

import Option from './option';

import '../styles/selector.css';

function Selector({ title, value, type, list, callback }) {
  const optionList = list.map((el, index) => {
    // eslint-disable-next-line react/no-array-index-key
    return <Option value={el} key={index} />;
  });

  return (
    <div className='selector flex-column'>
      <h3>{title}</h3>
      <select
        value={value}
        name={type}
        onChange={(e) => callback(e.target.value)}
      >
        {optionList}
      </select>
    </div>
  );
}

export default Selector;
