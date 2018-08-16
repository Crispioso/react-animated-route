import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import Transition from 'react-transition-group/Transition';

import './index.css';
import App from './App';
import { AnimatedComponent } from './AnimatedComponent';

const root = () => (
    <h1>Root</h1>
)

const UsersRoute = () => (
    <div>
        <Route path="/users" component={App}/>
        <Route path="/users/:userID" component={AnimatedComponent}/>
    </div>
)

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={root}/>
            <Route path="/users" component={UsersRoute}/>
        </Switch>
    </BrowserRouter>, 
    document.getElementById('root')
);
