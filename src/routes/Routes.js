import React from 'react'
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Person from "../pages/Person";
import HomePage from "../pages/Home";
import NotFound from "../pages/NotFound";

export const Routes = () => {
    return (
            
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
    )
}
