import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import { createBrowserHistory } from 'history'

import App from './App';
import LoginPage from './pages/login';
import DashboardPage from './pages/dashboard';
import ApiService from './api'

import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import {NotificationContainer} from 'react-notifications';

import PrivateRoute from '../src/routes/ProtectedRoute';
import LogoutRoute from '../src/routes/LogoutRoute';

export const apiService = new ApiService()
export const history = createBrowserHistory({forceRefresh: true})

const routing = (
  <Router history={history}>
    <div>
    <NotificationContainer/>
      <Route exact path="/" render={() => {
          return (
            <Redirect to="/dashboard" />
          )
      }} />
      <LogoutRoute path="/login" component={LoginPage} />
      <PrivateRoute path="/dashboard" component={DashboardPage} />
      <Route path="/home" component={App} />
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
