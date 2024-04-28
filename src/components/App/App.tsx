import './App.css';
import React from 'react';
import Button from '../Button/Button.tsx';

function App() {
  return (
    <div className='app'>
      <div className='app__screen'>
        <p className='app__value'>12420</p>
      </div>
      <div className='app__buttons'>
        <Button 
        children='0'
        />
        <Button 
        children='0'
        />
        <Button 
        children='0'
        />
        <Button 
        children='0'
        />
      </div>
    </div>
  );
}

export default App;
