import './App.css';
import React from 'react';
import { useState } from 'react';
import ButtonTab from '../ButtonTab/ButtonTab.tsx';
import { numbers, signs } from '../../utils/constats.ts';

function App() {

  const [result, setResult] = useState('');
  const [sign, setSign] = useState('');
  const [finished, setFinished] = useState(false);

  function sliceResult(x) {
    setResult(result.slice(0, -1) + x);
  };

  function updateResult(x: string) {
    if (signs.some(s => {
      return s === x
    }) && signs.some(s => {
      return s === result[result.length - 1]
    })) {
      sliceResult(x);
    }
    else
      setResult(result + x);
  };

  function addSign(x: string) {
    if (sign === '' && result !== '' && '.' !== result[result.length - 1]) {
      setSign(x);
      updateResult(x);
    } else if (sign === '' && result === '') {
      setResult('');
      setSign('');
    } else if ('.' === result[result.length - 1]) {
      sliceResult(x);
      setSign('');
    } else {
      setResult(x);
      setSign(x);
    }
  };

  function addPoint(x: string) {
    if (result === '') {
      setResult('0' + x);
    } else if (signs.some(s => {
      return s === result[result.length - 1]
    })) {
      setResult(result + '0' + x);
    } else {
      setResult(result + x);
    }
  };


  function getResult() {
    setResult(eval(result));
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
        addPoint={addPoint}
        getResult={getResult}
      />
    </div>
  );
};

export default App;
