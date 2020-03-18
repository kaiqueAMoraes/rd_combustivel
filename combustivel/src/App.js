import React from 'react';
import Login from './pages/login-page/login-page.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

