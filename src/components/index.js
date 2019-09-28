import React from 'react';
import {Route} from 'react-router-dom';
import AuthorizedTemplate from './templates/AuthorizedTemplate';
import {ROUTES} from '../navigation';

export const AuthorizedRoutes = () => (
  <AuthorizedTemplate>
    {ROUTES.map(route => (
      <></>
    ))}
  </AuthorizedTemplate>
);