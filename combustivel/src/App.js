import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/header.component';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login-page/login-page.component';
import Home from './pages/home/home-page'
import CadastroPage from './pages/cadastro-page/cadastro.component';
import CadastroEditPage from './pages/cadastro-edit-page/cadastro-edit-page.component';
import CreateAddress from './pages/create-address-page/create-address-page.component';
import DashboardPage from './pages/dashboard-page/dashboard.page';


function App() {
  let timer = 0;
  setInterval(() => {
    timer++;
    console.log(`app loaded ${timer} times`)
  }, 20000);

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/cadastro" component={CadastroPage} />
        <Route exact path="/dashboard" component={DashboardPage}/>
        <Route exact path="/dashboard/novo-endereco" component={CreateAddress}/>
        <Route exact path="/dashboard/edit-endereco" component={CreateAddress}/>
        <Route exact path="/dashboard/edit-usuario" component={CadastroEditPage}/>
      </Switch>
    </BrowserRouter>
  </>
  );
}

export default App;

