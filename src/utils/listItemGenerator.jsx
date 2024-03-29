import React from 'react';

import ListItem from '../components/listitem';

const listItemGenerator = (arr, callback) => {
  return arr.map((el, index) => {
    return (
      <ListItem
        /* eslint-disable-next-line react/no-array-index-key */
        key={index}
        name={el.name}
        cost={el.cost}
        category={el.category}
        phase={el.phase}
        text={el.text}
        keywords={el.keywords}
        callback={callback}
      />
    );
  });
};

export default listItemGenerator;
