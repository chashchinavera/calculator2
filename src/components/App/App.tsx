import './App.css';
import React from 'react';
import { useState } from 'react';
import ButtonTab from '../ButtonTab/ButtonTab.tsx';
import { numbers, signs } from '../../utils/constats.ts';

function App() {

  const [result, setResult] = useState('');
  const [sign, setSign] = useState('');
  const [finished, setFinished] = useState(false);

  function updateResult(x: string) {
    if (x === '.' && result === '')
      setResult('0.');
    else
      setResult(result + x);
    console.log('1')
  };

  function addSign(x: string) {
    if (sign === '') {
      setSign(x);
      console.log(sign)
      updateResult(x);
    }
    else {
      // setSign(x);
      console.log('false', sign);
      // setResult(result + x);
    }

    // setSign(x)
    // setResult(result + sign)
    console.log(sign)
  };

  function cleanResult() {
    setResult('');
    setSign('');
    setFinished(false);
    console.log(sign);
    console.log('clean')
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
