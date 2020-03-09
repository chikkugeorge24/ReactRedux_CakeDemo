import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <React.Fragment>
        <CakeContainer/>
        <HooksCakeContainer />
        <IceCreamContainer />
    </React.Fragment>
  );
}

export default App;
