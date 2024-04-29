import './App.css';
import React from 'react';
import { useState } from 'react';
import ButtonTab from '../ButtonTab/ButtonTab.tsx';
import { numbers, signs } from '../../utils/constats.ts';

function App() {

  const [result, setResult] = useState('');
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [sign, setSign] = useState('');
  const [finished, setFinished] = useState(false);

  function updateFirstValue() {
    if (result === '' || signs.some(sign => {
      return sign === result
    }))
      setFirstValue(result);
    // console.log(firstValue);
  };

  function updateSecondValue() {
    if (result === '' || signs.some(sign => {
      return sign !== result
    }))
      setSecondValue(result);
    // console.log(secondValue);
  };

  function addSign(sign:string) {
    if (signs.some(sign => {
      return sign === result
    }))
      setSign(sign);
    console.log(sign);
    setResult(result + sign )
  };

  function updateResult(x: string) {
    if (x === '.' && result === '')
      setResult('0.');
    else
      setResult(result + x);

    updateFirstValue();
    updateSecondValue();
  };

  function cleanResult() {
    setResult('');
    setFirstValue('');
    setSecondValue('');
    setSign('');
    setFinished(false);
  };

  return (
    <div className='app'>
      <div className='app__screen'>
        <p className='app__value' id='result'>{result}</p>
      </div>
      <ButtonTab
        updateResult={updateResult}
        cleanResult={cleanResult}
        addSign={addSign}
      />
    </div>
  );
};

export default App;
