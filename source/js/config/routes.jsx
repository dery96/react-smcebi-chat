import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from 'views/NotFound';
import Dashboard from 'views/Dashboard';
import Channels from 'views/Channels/Channels';
import About from 'views/About';
import Profile from 'views/Profile/Profile';
import Login from 'views/Login/Login';
import RegisterPage from 'views/RegisterPage/RegisterPage';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  CHANNELS: `${ publicPath }channels`,
  ABOUT: `${ publicPath }about`,
  PROFILE: `${ publicPath }profile`,
  LOGIN: `${ publicPath }login`,
  REGISTER: `${ publicPath }register`,
};

const RouteLayout = ({ component, ...rest }) => {
  return (
    <div>
      <Header />
      <div className='container'>
        <Route { ...rest } render={ () => React.createElement(component) } />
      </div>
      <Footer />
    </div>
  );
};

const RouteWithoutLayout = ({ component, ...rest }) => {
  return (
    <div className='container'>
      <div className='Page'>
        <Route { ...rest } render={ () => React.createElement(component) } />
      </div>
    </div>
  );
};

export default () => (
  <Switch>
    <RouteLayout exact path={ publicPath } component={ Dashboard } />
    <RouteLayout path={ routeCodes.CHANNELS } component={ Channels } />
    <RouteLayout path={ routeCodes.ABOUT } component={ About } />
    <RouteLayout path={ routeCodes.PROFILE } component={ Profile } />
    <RouteWithoutLayout path={ routeCodes.LOGIN } component={ Login } />
    <RouteWithoutLayout path={ routeCodes.REGISTER } component={ RegisterPage } />
    <Route path='*' component={ NotFound } />
  </Switch>
);

