import './App.css';
import React from 'react';
import { useState } from 'react';
import ButtonTab from '../ButtonTab/ButtonTab.tsx';
import { numbers, signs } from '../../utils/constats.ts';

function App() {

  const [result, setResult] = useState('');
  const [sign, setSign] = useState('');
  const [finished, setFinished] = useState(false);



  function addSign(x: string) {
    if (sign !== '') {
      setSign(x);
      setResult(result + x);
      console.log(sign, result)
    }
    else {
      setSign(x)
      setResult(result + x)
    }
  };

  function updateResult(x: string) {
    if (x === '.' && result === '')
      setResult('0.');
    else
      setResult(result + x);
  };

  function cleanResult() {
    setResult('');
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
