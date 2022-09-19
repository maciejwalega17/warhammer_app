import React from 'react';

const buttonGenerator = (cost, callback, name) => {
  const costSplit = cost.split('/');
  const btnArr = [];
  costSplit.forEach((el) => {
    btnArr.push(
      <button
        key={name + el}
        type='button'
        className='btn'
        onClick={() => callback(name, el)}
      >
        {`${el} CP`}
      </button>
    );
  });
  return btnArr;
};

export default buttonGenerator;
