import React from 'react';
import logo from './logo.svg';
import { Button } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>my components</p>
        <Button text={'hhhasdasdh'}></Button>
      </header>
    </div>
  );
}

export default App;
