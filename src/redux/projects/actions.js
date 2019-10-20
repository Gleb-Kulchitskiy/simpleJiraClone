const actions = {
  GET_PROJECTS_INFO: 'GET_PROJECTS_INFO',
  getProjectsInfo: payload => ({type: actions.GET_PROJECTS_INFO, payload})
};

export default actions;