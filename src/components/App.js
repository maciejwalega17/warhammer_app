import React, { useState, useEffect, useMemo } from 'react';

import subfactionListGenerator from '../utils/subfactionListGenerator';
import phaseList from '../data/phaseList';
import armyList from '../data/armyList';
import stratagemListMerged from '../data/stratagemListMerged';
import { switchColor } from '../utils/switchColor';

import Selector from './selector';
import List from './list';
import PaymentModal from './PaymentModal';
import Counter from './counter';
import Settings from './settings';
import '../styles/App.css';
import StratagemButton from './StratagemButton';

const listTitle = {
  mine: 'My turn Stratagems:',
  enemy: 'Enemy turn Stratagems:',
  core: 'Core Stratagems:',
  before: 'Before the Battle Stratagems:',
};

const MINE = 'mine';
const ENEMY = 'enemy';
const CORE = 'core';
const BEFORE = 'before';

const isOnTop = () => window.visualViewport.height === window.innerHeight;

const isScrollOnTop = () => window.pageYOffset === 0;

export default function App() {
  const [selectedPhase, setSelectedPhase] = useState(phaseList[0]);
  const [selectedArmy, setSelectedArmy] = useState(armyList[0]);
  const [selectedSubfaction, setSelectedSubfaction] = useState('--Custom--');
  const [commandPoints, setCommandPoints] = useState(6);
  const [selectedStratagem, setSelectedStratagem] = useState(MINE);

  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const [item, setItem] = useState({ name: '', cost: 0 });
  const [showSettings, setShowSettings] = useState(isOnTop());

  useEffect(() => {
    const trackScrolling = () => {
      if (isScrollOnTop()) {
        setShowSettings(true);
      } else {
        setShowSettings(false);
      }
    };

    document.addEventListener('scroll', trackScrolling);

    return () => document.removeEventListener('scroll', trackScrolling);
  }, []);

  const onClickNav = (direction) => {
    const currentIndex = phaseList.indexOf(selectedPhase);

    if (direction === 'next') {
      setSelectedPhase(phaseList[(currentIndex + 1) % phaseList.length]);
    } else if (direction === 'prev') {
      setSelectedPhase(
        phaseList[(currentIndex + phaseList.length - 1) % phaseList.length]
      );
    }
  };

  const callbackBuy = (name, cost) => {
    setItem({ name, cost: parseInt(cost, 10) });
    setShowPaymentModal((prevState) => !prevState);
  };

  const selectedArmyStratagems = useMemo(
    () =>
      stratagemListMerged.filter(
        (el) =>
          el.faction.toLowerCase() === selectedArmy.toLowerCase() ||
          el.faction.toLowerCase().includes(selectedSubfaction.toLowerCase())
      ),
    [selectedArmy, selectedSubfaction]
  );

  const selectedPhaseStratagems = useMemo(
    () =>
      selectedArmyStratagems.filter(
        (el) =>
          el.phase.toLowerCase().includes(selectedPhase.toLowerCase()) ||
          el.phase.toLowerCase() === 'any'
      ),
    [selectedArmyStratagems, selectedPhase]
  );

  const myPhase = useMemo(
    () =>
      selectedPhaseStratagems.filter(
        (el) =>
          el.whose.toLowerCase() === MINE || el.whose.toLowerCase() === 'both'
      ),
    [selectedPhaseStratagems]
  );
  const enemyPhase = useMemo(
    () =>
      selectedPhaseStratagems.filter(
        (el) =>
          el.whose.toLowerCase() === ENEMY || el.whose.toLowerCase() === 'both'
      ),
    [selectedPhaseStratagems]
  );

  const coreStratagems = useMemo(
    () => stratagemListMerged.filter((el) => el.faction.toLowerCase() === CORE),
    []
  );

  const beforeStratagems = useMemo(
    () =>
      selectedArmyStratagems.filter((el) => el.phase === 'Before the Battle'),
    [selectedArmyStratagems]
  );

  const listArr = {
    mine: myPhase,
    enemy: enemyPhase,
    core: coreStratagems,
    before: beforeStratagems,
  };

  useEffect(() => {
    switchColor(selectedArmy);
  }, [selectedArmy]);

  return (
    <>
      {showSettings && <Settings />}
      {showPaymentModal && (
        <PaymentModal
          item={item}
          onSuccess={() => {
            setCommandPoints(
              (prevCommandPoints) => prevCommandPoints - item.cost
            );
            setShowPaymentModal(false);
          }}
          onCancel={() => {
            setShowPaymentModal(false);
          }}
        />
      )}

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
          onClickAdd={() =>
            setCommandPoints((prevCommandPoints) => prevCommandPoints + 1)
          }
          onClickSub={() =>
            setCommandPoints((prevCommandPoints) => prevCommandPoints - 1)
          }
        />
        <div className='stratagems flex-column'>
          <h1>Stratagems:</h1>
          <div className='stratagem-btn-container'>
            {[MINE, ENEMY, CORE, BEFORE].map((stratagem) => (
              <StratagemButton
                key={stratagem}
                isSelected={selectedStratagem === stratagem}
                type={stratagem}
                onClick={() => setSelectedStratagem(stratagem)}
              />
            ))}
          </div>
        </div>
        <div className='flex-row'>
          <List
            title={listTitle[selectedStratagem]}
            listArr={listArr[selectedStratagem]}
            callback={callbackBuy}
          />
        </div>
      </div>
    </>
  );
}
