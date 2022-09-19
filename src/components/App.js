import React, { useState, useEffect } from 'react';

import onClickSetCounter from '../functions/onClickSetCounter';
import subfactionListGenerator from '../functions/subfactionListGenerator';
import phaseList from '../data/phaseList';
import armyList from '../data/armyList';
import stratagemListMerged from '../data/stratagemListMerged';
import switchColor from '../functions/switchColor';

import Selector from './selector';
import List from './list';
import Modal from './modal';
import Counter from './counter';
import PayWindow from './pay_window';
import Settings from './settings';

import '../styles/App.css';

function App() {
  const [selectedPhase, setSelectedPhase] = useState(phaseList[0]);
  const [selectedArmy, setSelectedArmy] = useState(armyList[0]);
  const [selectedSubfaction, setSelectedSubfaction] = useState('--Custom--');
  const [commandPoints, setCommandPoints] = useState(6);
  const [listShow, setlistShow] = useState('mine');

  const [showModalSmall, setShowModalSmall] = useState(false);

  const [itemName, setitemName] = useState('');
  const [itemCost, setitemCost] = useState(0);
  const [DarkModeOn, setDarkModeOn] = useState(true);
  const [isPageOnTop, setisPageOnTop] = useState(false);

  // ^States

  useEffect(() => {
    document.addEventListener('scroll', trackScrolling);
  });

  const trackScrolling = () => {
    if (window.pageYOffset === 0) {
      setisPageOnTop(true);
    } else {
      setisPageOnTop(false);
    }
  };

  const onClickNav = (params) => {
    if (params === 'next') {
      if (phaseList.indexOf(selectedPhase) < phaseList.length - 1) {
        setSelectedPhase(phaseList[phaseList.indexOf(selectedPhase) + 1]);
      } else {
        setSelectedPhase(phaseList[0]);
      }
    } else if (params === 'prev') {
      if (phaseList.indexOf(selectedPhase) === 0) {
        setSelectedPhase(phaseList[phaseList.length - 1]);
      } else {
        setSelectedPhase(phaseList[phaseList.indexOf(selectedPhase) - 1]);
      }
    }
  };

  const callbackBuy = (name, cost) => {
    setitemName(name);
    setitemCost(parseInt(cost, 10));
    setShowModalSmall((prevState) => !prevState);
  };
  // ^changing states

  const selectedArmyStratagems = stratagemListMerged.filter(
    (el) =>
      el.faction.toLowerCase() === selectedArmy.toLowerCase() ||
      el.faction.toLowerCase().includes(selectedSubfaction.toLowerCase())
  );
  const selectedPhaseStratagems = selectedArmyStratagems.filter(
    (el) =>
      el.phase.toLowerCase().includes(selectedPhase.toLowerCase()) ||
      el.phase.toLowerCase() === 'any'
  );
  const myPhase = selectedPhaseStratagems.filter(
    (el) =>
      el.whose.toLowerCase() === 'mine' || el.whose.toLowerCase() === 'both'
  );
  const enemyPhase = selectedPhaseStratagems.filter(
    (el) =>
      el.whose.toLowerCase() === 'enemy' || el.whose.toLowerCase() === 'both'
  );

  const coreStratagems = stratagemListMerged.filter(
    (el) => el.faction.toLowerCase() === 'core'
  );

  const beforeStratagems = selectedArmyStratagems.filter(
    (el) => el.phase === 'Before the Battle'
  );

  // ^stratagem list filtering

  const listTitleGenerator = () => {
    if (listShow === 'mine') {
      return 'My turn Stratagems:';
    }
    if (listShow === 'enemy') {
      return 'Enemy turn Stratagems:';
    }
    if (listShow === 'core') {
      return 'Core Stratagems:';
    }
    if (listShow === 'before') {
      return 'Before the Battle Stratagems:';
    }

    return undefined;
  };
  const listArrGenerator = () => {
    if (listShow === 'mine') {
      return myPhase;
    }
    if (listShow === 'enemy') {
      return enemyPhase;
    }
    if (listShow === 'core') {
      return coreStratagems;
    }
    if (listShow === 'before') {
      return beforeStratagems;
    }

    return undefined;
  };

  const listTitle = listTitleGenerator();
  const listArr = listArrGenerator();
  const contentSmall = (
    <PayWindow
      itemName={itemName}
      cost={itemCost}
      callback={() => {
        onClickSetCounter(setCommandPoints, 'sub', itemCost);
      }}
      closeCallback={() => {
        setShowModalSmall((prevState) => !prevState);
      }}
    />
  );

  const btnStyleChanger = (props) => {
    return listShow === props ? 'clicked' : null;
  };
  switchColor(selectedArmy);

  return (
    <>
      {isPageOnTop ? (
        <Settings mode={DarkModeOn} callback={setDarkModeOn} />
      ) : null}
      <Modal
        content={contentSmall}
        onClick={() => {
          setShowModalSmall((prevState) => !prevState);
        }}
        show={showModalSmall}
      />

      <div className='wrapper flex-column'>
        <div className='nav '>
          <div className='selector-container space-around'>
            <Selector
              title='Phase:'
              value={selectedPhase}
              type='Phase Select'
              list={phaseList}
              callback={(value) => setSelectedPhase(value)}
            />
            <Selector
              title='Army:'
              value={selectedArmy}
              type='Army Select'
              list={armyList}
              callback={(value) => setSelectedArmy(value)}
            />
            <Selector
              title='Subfaction:'
              value={selectedSubfaction}
              type='Army Select'
              list={subfactionListGenerator(selectedArmy)}
              callback={(value) => setSelectedSubfaction(value)}
            />
          </div>
          <div className='flex-row space-around nav-container'>
            <button
              type='button'
              className='btn'
              onClick={() => onClickNav('prev')}
            >
              Previous phase
            </button>
            <button
              type='button'
              className='btn'
              onClick={() => onClickNav('next')}
            >
              Next phase
            </button>
          </div>
        </div>

        <Counter
          counter={commandPoints}
          currency='CP'
          onClickAdd={() => onClickSetCounter(setCommandPoints, 'add', 1)}
          onClickSub={() => onClickSetCounter(setCommandPoints, 'sub', 1)}
        />
        <div className='stratagems flex-column'>
          <h1>Stratagems:</h1>
          <div className='stratagem-btn-container flex-row'>
            <div className={btnStyleChanger('mine')}>
              <button
                type='button'
                className='btn'
                onClick={() => setlistShow('mine')}
              >
                Show my phase Stratagems
              </button>
            </div>
            <div className={btnStyleChanger('enemy')}>
              <button
                type='button'
                className='btn'
                onClick={() => setlistShow('enemy')}
              >
                Show enemy phase Stratagems
              </button>
            </div>
          </div>
          <div className='stratagem-btn-container flex-row'>
            <div className={btnStyleChanger('core')}>
              <button
                type='button'
                className='btn'
                onClick={() => setlistShow('core')}
              >
                Show Core Stratagems
              </button>
            </div>
            <div className={btnStyleChanger('before')}>
              <button
                type='button'
                className='btn'
                onClick={() => setlistShow('before')}
              >
                Before the Battle Stratagems
              </button>
            </div>
          </div>
          <div className='flex-row'>
            <List title={listTitle} listArr={listArr} callback={callbackBuy} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
