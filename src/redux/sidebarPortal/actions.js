const actions = {
  SHOW_PORTAL: "SHOW_PORTAL",
  HIDE_PORTAL: "HIDE_PORTAL",
  showPortal: () => ({type: actions.SHOW_PORTAL}),
  hidePortal: () => ({type: actions.HIDE_PORTAL}),
};

export default actions;