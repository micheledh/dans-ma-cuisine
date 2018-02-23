import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import RecipePage from './components/recipePage/RecipePage';

const Routes = (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipe/:id" component={RecipePage} />
    </Switch>
);

export default Routes;
