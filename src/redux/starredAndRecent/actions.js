const actions = {
  SHOW_COMPONENT: 'SHOW_COMPONENT',
  HIDE_COMPONENT: 'HIDE_COMPONENT',
  showComponent: payload => ({type: actions.SHOW_COMPONENT, payload}),
  hideComponent: payload => ({type: actions.HIDE_COMPONENT, payload})
};

export default actions;