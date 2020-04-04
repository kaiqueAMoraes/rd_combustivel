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
import CheckoutPage from './pages/checkout/checkout.component';
import CheckoutPageFinal from './pages/checkout-page-final/checkout-page-final.component'

function App() {

  let timer = 0;
  setInterval(() => {
    timer++;
    console.log(`app loaded ${timer} times`)
  }, 200000);

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
        <Route exact path="/carrinho" component={CheckoutPage}/>
        <Route exact path="/carrinho/checkout" component={CheckoutPageFinal}/>
        {/* <Route exact path="/carrinho/checkout/checkout-adresses" component={CreateAddress}/>
        <Route exact path="/finalizacao-compra" component={finalizarCompra}/> */}
      </Switch>
    </BrowserRouter>
  </>
  );
}

export default App;

