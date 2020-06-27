import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import Profile from './Profile';
import About from './About';

export default function App() {
  return (
    <>
      <Dashboard />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/profile" render={props => <Profile {...props} />} />
        <Route exact path="/about" render={props => <About {...props} />} />
      </Switch>
    </>
  );
}
