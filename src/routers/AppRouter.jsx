import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/Dashboard';
import Login from '../components/Login';
import NotFoundPage from '../components/NotFound';
import PrivateRoute from './PrivateRoute.js';
import PublicRoute from './PublicRoute.js';

export
const history = createHistory();

const AppRouter = ({whatever1, whatever2}) => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={Login} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <Route          component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;