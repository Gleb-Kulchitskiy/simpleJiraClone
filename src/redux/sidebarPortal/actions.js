const actions = {
  SHOW_PORTAL: "SHOW_PORTAL",
  HIDE_PORTAL: "HIDE_PORTAL",
  showPortal: (payload) => ({type: actions.SHOW_PORTAL, payload}),
  hidePortal: (payload) => ({type: actions.HIDE_PORTAL, payload}),
};

export default actions;