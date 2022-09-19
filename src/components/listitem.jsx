import React from 'react';

import buttonGenerator from '../utils/buttonGenerator';
import '../styles/listitem.css';

function ListItem({ name, cost, category, phase, text, keywords, callback }) {
  return (
    <div className='flex-column list-item'>
      <div className='container-head flex-column'>
        <div className='flex-row space-between'>
          <p className='name'>{name}</p>
          <div className='cost flex-row'>
            {buttonGenerator(cost, callback, name)}
          </div>
        </div>
        <div className='flex-row space-between'>
          <p className='category'>{category} Stratagem</p>
          <p className='phase'>{phase} Phase</p>
        </div>
      </div>

      <div className='container-body'>
        <p className='text'>{text}</p>
        <p className='keywords'>KEYWORDS: {keywords.join(', ')}</p>
      </div>
    </div>
  );
}

export default ListItem;
