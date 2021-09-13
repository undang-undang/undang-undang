import React from 'react';
import {
  Switch,
  Route,
  Router as BrowserRouter
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import {
  LandingPage,
  Templates,
  TemplateDetails
} from '../pages'

interface PublicRoute {
  path: string
  component: React.FC
  exact: boolean
}

const DEMO = 'demo'

const publicRoutes:PublicRoute[] = [
  {
    path: '/',
    component: LandingPage,
    exact: true
  },
  {
    path: '/details/:templateName',
    component: TemplateDetails,
    exact: true
  },
  {
    path: `/${DEMO}/bunga`,
    component: Templates.Bunga,
    exact: true,
  },
  {
    path: `/${DEMO}/daun`,
    component: Templates.Daun,
    exact: true
  },
  {
    path: `/${DEMO}/pohon`,
    component: Templates.Pohon,
    exact: true
  }
];

const Router = () => {
  return (
    <BrowserRouter history={ createBrowserHistory() }>
      <Switch>
        { publicRoutes.map(route => <Route key={ route.path } exact={ route.exact } path={ route.path } component={ route.component } />) }
      </Switch>
    </BrowserRouter>
  );
};

export default Router;