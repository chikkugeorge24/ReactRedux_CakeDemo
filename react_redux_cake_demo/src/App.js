import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';

function App() {
  return (
    <React.Fragment>
        <CakeContainer/>
        <HooksCakeContainer />
    </React.Fragment>
  );
}

export default App;
