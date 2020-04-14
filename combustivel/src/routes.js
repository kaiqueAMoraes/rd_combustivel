import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/header.component';
import Login from './pages/login-page/login-page.component';
import LogoutPage from './pages/logout-page/logout-page.component';
import Home from './pages/home/home-page'
import CadastroPage from './pages/cadastro-page/cadastro.component';
import CadastroEditPage from './pages/cadastro-edit-page/cadastro-edit-page.component';
import CreateAddress from './pages/create-address-page/create-address-page.component';
import DashboardPage from './pages/dashboard-page/dashboard.page';
import Product from './components/grid-produto/new-grid-product';
import CheckoutPage from './pages/checkout/checkout.component';
import CheckoutPageFinal from './pages/checkout-page-final/checkout-page-final.component';
import SuccessOrderPage from './pages/checkout-success/checkout-success.component';
import CategoriaPage from './pages/categoria-page/categoria.component';
import Footer from '../../combustivel/src/components/footer/footer';
import signInSignUpComponents from './pages/sign-in-sign-up/sign-in-sign-up.components';


const Routes = (props) => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home/categoria/:cat" component={CategoriaPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/cadastro" component={CadastroPage} />
            <Route exact path="/dashboard" component={DashboardPage} />
            <Route exact path="/dashboard/novo-endereco" component={CreateAddress} />
            <Route exact path="/dashboard/edit-endereco" component={CreateAddress} />
            <Route exact path="/dashboard/edit-usuario" component={CadastroEditPage} />
            <Route exact path="/produto" component={Product} />
            <Route exact path="/carrinho" component={CheckoutPage} />
            <Route exact path="/carrinho/checkout" component={CheckoutPageFinal} />
            <Route exact path="/carrinho/checkout/success-page" component={SuccessOrderPage} />
            <Route exact path="/user-credentials" component={signInSignUpComponents}/>
        </Switch>
        <Footer />
    </BrowserRouter>
)

export default Routes;