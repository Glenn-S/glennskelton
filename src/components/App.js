import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from './Header';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Login from '../pages/Login';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;