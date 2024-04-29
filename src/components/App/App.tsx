import './App.css';
import React from 'react';
import { useState } from 'react';
import ButtonTab from '../ButtonTab/ButtonTab.tsx';

function App() {

  const [result, setResult] = useState('');

  function updateResult(x: string) {
    setResult (result + x)
  };

  return (
    <div className='app'>
      <div className='app__screen'>
        <p className='app__value' id='result'>{result}</p>
      </div>
      <ButtonTab
        updateResult={updateResult}
      />
    </div>
  );
};

export default App;
