import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/header.component';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login-page/login-page.component';


function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  </>
  );
}

export default App;

