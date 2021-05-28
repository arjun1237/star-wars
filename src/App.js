import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Person from "./pages/Person";
import HomePage from "./pages/Home";
import NotFound from "./pages/NotFound";

import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>

          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/person/:id">
            <Person />
          </Route>

          <Route>
            <NotFound />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
