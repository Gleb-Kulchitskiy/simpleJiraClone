import sidebarPortalReducer from './sidebarPortal/reduser';
import navigationReducer from './navigation/reduser';
import starredAndRecentReducer from './starredAndRecent/reducer';
import projectsReducer from './projects/reducer';
import popupReducer from './popUp/reduer';
import createIssueReducer from './createIssue/reducer'

const rootReducer = {
  sidebarPortal: sidebarPortalReducer,
  navigation: navigationReducer,
  starredAndRecent: starredAndRecentReducer,
  projects: projectsReducer,
  popUp: popupReducer,
  createIssue: createIssueReducer,
};
export default rootReducer;