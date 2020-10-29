import React from 'react';
import MultipleTabs from './components/MultipleTabs';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={MultipleTabs}></Route>
          <Route path='/Dashboard' component={Dashboard}></Route>
        </Switch>
    </Router>
    </div>
  );
}
