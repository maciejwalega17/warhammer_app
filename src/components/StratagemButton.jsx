import React from 'react';

const text = {
  mine: 'Show my phase Stratagems',
  enemy: 'Show enemy phase Stratagems',
  core: 'Show Core Stratagems',
  before: 'Before the Battle Stratagems',
};

export default function StratagemButton({ isSelected, type, onClick }) {
  return (
    <button
      type='button'
      className={isSelected ? 'clicked btn' : 'btn'}
      onClick={() => onClick(type)}
    >
      {text[type]}
    </button>
  );
}
