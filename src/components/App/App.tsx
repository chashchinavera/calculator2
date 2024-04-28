import './App.css';
import React from 'react';
import ButtonTab from '../ButtonTab/ButtonTab.tsx';

function App() {
  return (
    <div className='app'>
      <div className='app__screen'>
        <p className='app__value'>0</p>
      </div>
        <ButtonTab />
    </div>
  );
}

export default App;
