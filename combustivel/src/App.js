import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes'

import Message from './components/message/message.components'
import CartDropdown from './components/cart-dropdown/cart-dropdown.component';

function App() {

  return (
    <>
      <Message/>
      <Routes/>
    </>
  );
}

export default App;

