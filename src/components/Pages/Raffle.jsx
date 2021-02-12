import React, { useState } from 'react';

const Raffle = () => {
  const [contestants, setContestants] = useState([]);
  const [winners, setWinners] = useState([]);
  const [prizes, setPrizes] = useState([]);
  const [limit, setLimit] = useState(1);
  const [prizeInput, setPrizeInput] = useState('');

  const handleContestantsChange = (e) => {
    const { value } = e.target;

    setContestants(value.split('\n'));
  }

  const handleLimitChange = (value) => () => {

    setLimit(prevState => {
      let nextState = prevState + value;

      if (nextState < 1) return 1;

      return nextState;
    });
  }

  const handlePickWinner = () => {
    setWinners(prevState => {
      let arr = [...prevState];
      while (arr.length < limit && arr.length < contestants.length) {
        const i = Math.round(Math.random() * (contestants.length - 1));

        if (arr.some(x => x === contestants[i])) {
          continue;
        }

        arr.push(contestants[i]);
      }

      return arr;
    });
  }

  const handleRemoveWinner = (name) => () => {
    setWinners(prevState => {
      return prevState.filter(x => x !== name);
    });
  }

  const handlePrizeInputChange = (e) => {
    const { value } = e.target;

    setPrizeInput(value);
  }

  const handleAddPrize = () => {
    setPrizes(prevState => prevState.concat(prizeInput));

    setPrizeInput('');
  }

  const handleRemovePrize = (prize) => () => {
    setPrizes(prevState => {
      return prevState.filter(x => x !== prize);
    });
  }

  return (
    <div className='page'>
      <h1 className='subtitle'>Seattle JS Raffle</h1>

      <div class='flex-r'>

        <div className='flex-c'>
          <label className='c-label' htmlFor='contestants-id'>Contestants</label>
          <textarea id='contestants-id' value={contestants.join('\n')} onChange={handleContestantsChange} />
          <button onClick={handlePickWinner}>Pick Winners</button>
        </div>

        <div className='flex-c'>
          <label className='c-label'>Winners</label>
          <div className='winner-c'>
            {winners.map(x => {
              return (
                <div className='winner-r'>{x}<button className='winner-b' onClick={handleRemoveWinner(x)}>X</button></div>
              );
            })}
          </div>
          <div className='limit-flex'>
            <div className='limit-div'>Limit: {limit}</div>
            <button className='limit-b' onClick={handleLimitChange(-1)}>-</button>
            <button className='limit-b' onClick={handleLimitChange(1)}>+</button>
          </div>
        </div>

        <div className='flex-c'>
          <label className='c-label'>Prizes</label>
          <div className='prize-c'>
            {prizes.map(x => {
              return (
                <div className='prize-r'>{x.toUpperCase()}<button className='prize-b' onClick={handleRemovePrize(x)}>X</button></div>
              );
            })}
          </div>
          <div className='input-flex'>
            <input id='prize-id' className='prize-input' onChange={handlePrizeInputChange} value={prizeInput} onSubmit={handleAddPrize} />
            <button onClick={handleAddPrize}>Add Prize</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Raffle;
