import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes'

function App() {

  let timer = 0;
  setInterval(() => {
    timer++;
    console.log(`app loaded ${timer} times`)
  }, 200000);

  return (
    <>
      <Routes/>
    </>
  );
}

export default App;

