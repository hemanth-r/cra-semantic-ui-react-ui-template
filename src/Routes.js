
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Dashboard from './features/dashboard/Dashboard';
import Feature1 from './features/feature1/Feature1';
import Feature2 from './features/feature2/Feature2';
import Feature3 from './features/feature3/Feature3';
import Feature4 from './features/feature4/Feature4';
import Feature5 from './features/feature5/Feature5';
import Feature6 from './features/feature6/Feature6';

export default function Routes() {
  return (
    <Switch>
      <Route path="/app/basicSettings/feature1">
        <Feature1 />
      </Route>
      <Route path="/app/basicSettings/feature2">
        <Feature2 />
      </Route>
      <Route path="/app/advancedSettings/feature3">
        <Feature3 />
      </Route>
      <Route path="/app/advancedSettings/feature4">
        <Feature4 />
      </Route>
      <Route path="/app/advancedSettings/feature5">
        <Feature5 />
      </Route>
      <Route path="/app/advancedSettings/feature6">
        <Feature6 />
      </Route>
      <Route path="/">
        <Dashboard />
      </Route>
      <Route path="/app">
        <Dashboard />
      </Route>
      <Route path="/app/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
}
