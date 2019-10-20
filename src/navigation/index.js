import React from 'react';
import ICONS from "../constants/icons";
import PORTAL_COMPONENTS from '../components/entities/portalComponents';
import POPUP_COMPONENTS from '../components/entities/popUpComponents';

import UserWork from '../components/entities/mainComponents/UserWors';
import Projects from '../components/entities/mainComponents/Projects';
import Dashboard from '../components/entities/mainComponents/Dashboard';
import IssueAndFilters from '../components/entities/mainComponents/IssueEndFilters';
import People from '../components/entities/mainComponents/People';
import Settings from '../components/entities/mainComponents/Settings';

import SIDEBAR_ACTIONS from '../redux/sidebarPortal/actions';
import POPUP_ACTIONS from '../redux/popUp/actions';

export const ROUTES = {
  USER_WORK: '/your_work',
  PROJECTS: '/projects',
  DASHBOARD: '/dashboard',
  PEOPLE: '/people',
  ISSUE_AND_FILTERS: '/issueandfilters',
  SETTINGS: '/settings'
};

export const routes = [
  {
    path: ROUTES.USER_WORK,
    component: props => <UserWork {...props}/>
  },
  {
    path: ROUTES.PROJECTS,
    component: props => <Projects {...props}/>
  }, {
    path: ROUTES.DASHBOARD,
    component: props => <Dashboard {...props}/>
  },
  {
    path: ROUTES.ISSUE_AND_FILTERS,
    component: props => <IssueAndFilters {...props}/>
  },
  {
    path: ROUTES.PEOPLE,
    component: props => <People {...props}/>
  },
  {
    path: ROUTES.SETTINGS,
    component: props => <Settings {...props}/>
  }

];

export const portalNavigationTop = {
    kiraSoftware: {
      icon: ICONS.LOGO,
      toolTipTex: 'Kira Software',
    },
    starredAndRecent: {
      icon: ICONS.STAR,
      action: SIDEBAR_ACTIONS.SHOW_PORTAL,
      component: PORTAL_COMPONENTS.STARRED_AND_RECENT,
      toolTipTex: 'Starred and Recent',
      hotKey: `\\`
    },
    search: {
      icon: ICONS.SEARCH,
      toolTipTex: 'Search',
      hotKey: `/`
    },
    create: {
      icon: ICONS.PLUS,
      action: POPUP_ACTIONS.SHOW_POPUP,
      component: POPUP_COMPONENTS.CREATE_TASK,
      toolTipTex: 'Create',
      hotKey: `c`
    }
  }
;

export const portalNavigationBottom = {
  notification: {
    icon: ICONS.BELL,
    toolTipTex: 'Notification',
  },
  switchItem: {
    icon: ICONS.SQUARE,
    toolTipTex: 'Switch to...',
  },
  help: {
    icon: ICONS.QUESTION,
    toolTipTex: 'Help',
  },
  settings: {
    icon: ICONS.GEAR,
    toolTipTex: 'Settings',
  }
};

export const navigation = {
  yourWork: {
    icon: ICONS.YOUR_WORK,
    to: ROUTES.USER_WORK,
    title: 'Your work',
  },
  projects: {
    icon: ICONS.PROJECTS,
    to: ROUTES.PROJECTS,
    title: 'Projects',
  },
  dashboard: {
    icon: ICONS.DASHBOARD,
    to: ROUTES.DASHBOARD,
    title: 'Dashboards',
  },
  people: {
    icon: ICONS.PEOPLE,
    to: ROUTES.PEOPLE,
    title: 'People',
  },
  issue: {
    icon: ICONS.ISSUE,
    to: ROUTES.ISSUE_AND_FILTERS,
    title: 'Issues and filters',
  },
  settings: {
    icon: ICONS.GEAR,
    to: ROUTES.SETTINGS,
    title: 'Kira Settings',
  },
};