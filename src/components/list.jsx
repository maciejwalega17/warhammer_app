import React from 'react';

import listItemGenerator from '../functions/listItemGenerator';

import '../styles/list.css';

function List({ title, listArr, callback }) {
  const listItemList = listItemGenerator(listArr, callback);

  return (
    <div className='list-container'>
      {listArr.length ? <h2>{title}</h2> : null}
      <div className='listitem-container'>{listItemList}</div>
    </div>
  );
}

export default List;
