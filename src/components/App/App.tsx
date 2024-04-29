import './App.css';
import React from 'react';
import { useState } from 'react';
import ButtonTab from '../ButtonTab/ButtonTab.tsx';

function App() {

  const [result, setResult] = useState('');

  function updateResult(x: string) {
    if (x === '.' && result === '')
      setResult('0.');
    else
      setResult(result + x);
  };

  function cleanResult() {
    setResult('');
  };

  return (
    <div className='app'>
      <div className='app__screen'>
        <p className='app__value' id='result'>{result}</p>
      </div>
      <ButtonTab
        updateResult={updateResult}
        cleanResult={cleanResult}
      />
    </div>
  );
};

export default App;
