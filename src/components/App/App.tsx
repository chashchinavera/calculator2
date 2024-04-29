import './App.css';
import React from 'react';
import ButtonTab from '../ButtonTab/ButtonTab.tsx';

function App() {

  let result = '';

  function updateResult(x: string) {
    result = result + x;
    console.log(result);
    return result;
  };
  
  return (
    <div className='app'>
      <div className='app__screen'>
        <input className='app__value' id='result' value={result || ''} />
      </div>
      <ButtonTab
        updateResult={updateResult}
      />
    </div>
  );
};

export default App;
