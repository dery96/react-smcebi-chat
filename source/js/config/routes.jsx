import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from 'views/NotFound';
import Dashboard from 'views/Dashboard';
import Channels from 'views/Channels/Channels';
import About from 'views/About';
import Profile from 'views/Profile/Profile';
import Login from 'views/Login/Login';
import RegisterPage from 'views/RegisterPage/RegisterPage';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  CHANNELS: `${ publicPath }channels`,
  ABOUT: `${ publicPath }about`,
  PROFILE: `${ publicPath }profile`,
  LOGIN: `${ publicPath }login`,
  REGISTER: `${ publicPath }register`
};

export default () => (
  <Switch>
    <Route exact path={ publicPath } component={ Dashboard } />
    <Route path={ routeCodes.CHANNELS } component={ Channels } />
    <Route path={ routeCodes.ABOUT } component={ About } />
    <Route path={ routeCodes.PROFILE } component={ Profile } />
    <Route path={ routeCodes.LOGIN } component={ Login } />
    <Route path={ routeCodes.REGISTER } component={ RegisterPage } />
    <Route path='*' component={ NotFound } />
  </Switch>
);
