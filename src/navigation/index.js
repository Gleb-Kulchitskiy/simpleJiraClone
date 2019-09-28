import ICONS from "../constants/icons";
import SIDEBAR_ACTIONS from '../redux/sidebarPortal/actions';

export const ROUTES = [
  {
    MAIN: '/',
  }
];

const topIcons = [ICONS.LOGO, ICONS.STAR, ICONS.SEARCH, ICONS.PLUS];

export const PORTAL_NAVIGATION = {
  KIRA_SOFTWARE: {
    icon: ICONS.LOGO,
  },
  STARRED_AND_RECENT: {
    icon: ICONS.STAR,
    action: SIDEBAR_ACTIONS.SHOW_PORTAL,

  },
  SEARCH: {
    icon: ICONS.SEARCH
  },
  CREATE: {
    icon: ICONS.PLUS
  }

};

export const NAVIGATION = {
  YOUR_WORK: {
    icon: ICONS.YOUR_WORK,
    to: '/',
    title: 'Your work',
  },
  PROJECTS: {
    icon: ICONS.PROJECTS,
    to: '/',
    title: 'Projects',
  },
  DASHBOARD: {
    icon: ICONS.DASHBOARD,
    to: '/',
    title: 'Dashboards',
  },
  ISSUE: {
    icon: ICONS.ISSUE,
    to: '/',
    title: 'Issues and filters',
  },
  PROJECTS_TREE: {
    icon: ICONS.PROJECT_TREE,
    to: '/',
    title: 'Project Tree',
  },
  SETTINGS: {
    icon: ICONS.GEAR,
    to: '/',
    title: 'Kira Settings',
  },
};