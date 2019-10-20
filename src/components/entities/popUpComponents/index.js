import React from 'react';
import CreateTask from './CreateIssue';

const POPUP_COMPONENTS = {
  CREATE_TASK: 'createTask',
};

export const components = {
  [POPUP_COMPONENTS.CREATE_TASK]: {
    render: props => <CreateTask {...props}/>
  }
};

export default POPUP_COMPONENTS;