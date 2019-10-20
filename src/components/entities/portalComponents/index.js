import React from 'react';
import StarredAndRecent from './StarredAndReccent';
import CreateProject from './CreateProject';

const PORTAL_COMPONENTS = {
  STARRED_AND_RECENT: 'starredAndRecent',
  CREATE_PROJECT: 'createProject',
};

export const components = {
  [PORTAL_COMPONENTS.STARRED_AND_RECENT]: {
    render: props => <StarredAndRecent {...props}/>
  },
  [PORTAL_COMPONENTS.CREATE_PROJECT]: {
    render: props => <CreateProject {...props}/>
  }
};

export default PORTAL_COMPONENTS