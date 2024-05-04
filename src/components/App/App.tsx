import './App.css';
import React from 'react';
import { useState } from 'react';
import ButtonTab from '../ButtonTab/ButtonTab.tsx';
import { numbers, signs } from '../../utils/constats.ts';

function App() {

  const [result, setResult] = useState('');
  const [sign, setSign] = useState('');
  const [bracket, setBracket] = useState(false);

  function sliceResult(x: string) {
    setResult(result.slice(0, -1) + x);
  };

  function changeSign() {
    if (numbers.some(n => {
      return n === result[result.length - 1]
    })) {
      setResult(result);
    } else if (result.endsWith('(-')) {
      setResult(result);
    } else {
      setResult(result + '(-')
      setBracket(true);
    }
  };

  function updateResult(x: string) {
    if (x === '.' && result === '') {
      setResult('0' + x);
    } else if (x === '.' && signs.some(s => {
      return s === result[result.length - 1]
    })) {
      setResult(result + '0' + x);
    } else if (signs.some(s => {
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
    if (sign === '' && result === '') {
      setResult('');
      setSign('');

    } else if ('.' === result[result.length - 1]) {
      sliceResult(x);

    } else if (bracket === false && signs.some(s => {
      return s === result[result.length - 1]
    })) {
      sliceResult(x);

    } else if (bracket === true && numbers.some(n => {
      return n === result[result.length - 1]
    })) {
      setResult(result + ')' + x);
      setBracket(false);

    } else if (bracket === true && numbers.some(n => {
      return n !== result[result.length - 1]
    })) {
      setResult(result.slice(0, -3) + x);

    } else {
      setResult(result + x);
      setSign(x);
    }
  };

  function addPoint(x: string) {
    if (sign === '' && result !== '' && x !== result[result.length - 1]) {
      setSign(x);
      updateResult(x);
    } else if (x === result[result.length - 1]) {
      sliceResult(x);
      setSign('');
    } else {
      updateResult(x);
    }
  };

  function getResult() {
    if (result.endsWith('(-')) {
      setResult(result);
    } else if (bracket === true) {
      console.log(bracket)
      console.log(result)
      setResult(eval(result.replace(/x/g, '*').replace(/÷/g, '/').replace(/%/g, '/100*') + ')'))
    } else
      setResult(eval(result.replace(/x/g, '*').replace(/÷/g, '/').replace(/%/g, '/100*')));
  };

  function cleanResult() {
    setResult('');
    setSign('');
    setBracket(false);
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
        getResult={getResult}
        addPoint={addPoint}
        changeSign={changeSign}
      />
    </div>
  );
};

export default App;
