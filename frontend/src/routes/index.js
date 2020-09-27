import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AddResidence from '../pages/AddResidence/index';
import HeatMap from '../pages/HeatMap';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={AddResidence} />
      <Route path="/map" component={HeatMap} />
    </Switch>
  );
}

export default Routes;
