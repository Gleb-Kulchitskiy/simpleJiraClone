import sidebarPortalReducer from './sidebarPortal/reduser';
import navigationReducer from './navigation/reduser';
import starredAndRecentReducer from './starredAndRecent/reducer';

const rootReducer = {
  sidebarPortal: sidebarPortalReducer,
  navigation: navigationReducer,
  starredAndRecent: starredAndRecentReducer
};
export default rootReducer;