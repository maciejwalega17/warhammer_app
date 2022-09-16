const onClickSetCounter = (callback, params, value) => {
  if (params === 'add') {
    callback((prevValue) => prevValue + value);
  } else if (params === 'sub') {
    callback((prevValue) => prevValue - value);
  }
};

export default onClickSetCounter;
