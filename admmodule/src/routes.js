import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Main from './pages/Main';


export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Logon} />
            <Route path="/main" exact component={Main} />
        </Switch>
    </BrowserRouter>
  );
}
