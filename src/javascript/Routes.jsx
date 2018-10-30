import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import RecipePage from './components/recipePage/RecipePage';
import Starters from './components/starters/Starters';
import Mains from './components/mains/Mains';
import Desserts from './components/desserts/Desserts';
import Others from './components/others/Others';

const Routes = (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipe/:id" component={RecipePage} />
        <Route exact path="/starters" component={Starters} />
        <Route exact path="/mains" component={Mains} />
        <Route exact path="/desserts" component={Desserts} />
        <Route exact path="/others" component={Others} />
    </Switch>
);

export default Routes;
