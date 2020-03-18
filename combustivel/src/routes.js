import React from 'react';


import Login from './pages/login-page/login-page.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Routes = (props) => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;