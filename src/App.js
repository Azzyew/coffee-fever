import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/menu'>
          <Home />
        </Route>
        <Route path='/contact'>
          <Home />
        </Route>
        <Route path='/find-us'>
          <Home />
        </Route>
        <Route path='/order'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
