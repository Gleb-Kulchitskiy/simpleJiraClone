import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import AuthorizedTemplate from './templates/AuthorizedTemplate';
import {routes, ROUTES} from '../navigation';


const AuthorizedRoutes = () => {

  return (
    <AuthorizedTemplate>
      <Switch>
        {routes.map(route => (
          <Route key={route.path} exact path={route.path} component={route.component}/>
        ))}
        <Route exact path='/'>
          <Redirect to={ROUTES.PROJECTS}/>
        </Route>
      </Switch>
    </AuthorizedTemplate>
  )
};

export default AuthorizedRoutes