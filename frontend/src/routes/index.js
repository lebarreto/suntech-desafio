import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AddResidence from '../pages/AddResidence/index';

function Routes() {
  return (
    <Switch>
      <Route
        path="/"
        exact
        component={AddResidence}
        activeClassName="is-active"
      />
    </Switch>
  );
}

export default Routes;
