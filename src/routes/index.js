import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './route';

import SignIn from '../pages/SignIn';
import Sells from '../pages/Sells';
import Sell from '../pages/Sell';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/sells" exact isPrivate component={Sells} />
      <Route path="/sell/:id" exact isPrivate component={Sell} />
    </Switch>
  );
}

export default Routes;
