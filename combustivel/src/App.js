import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/header.component';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login-page/login-page.component';
import CadastroPage from './pages/cadastro-page/cadastro.component';


function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/cadastro" component={CadastroPage} />
      </Switch>
    </BrowserRouter>
  </>
  );
}

export default App;

