import React from 'react';
import MultipleTabs from './components/MultipleTabs';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';

require.context('./stylesheets/', true, /\.(css|scss)$/i)

//changed this so I could work on the css for dashboard. put this back -Joe
//    <div className="App">
//      <Router>
//        <Switch>
//          <Route exact path='/' component={MultipleTabs}></Route>
//          <Route path='/Dashboard' component={Dashboard}></Route>
//        </Switch>
//      </Router>
//    </div>
//  );

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
