import React from 'react';

import listItemGenerator from '../utils/listItemGenerator';

import '../styles/list.css';

export default function List({ title, listArr, callback }) {
  const listItemList = listItemGenerator(listArr, callback);

  return (
    <div className='list-container'>
      {listArr.length && <h2>{title}</h2>}
      <div className='listitem-container'>{listItemList}</div>
    </div>
  );
}
