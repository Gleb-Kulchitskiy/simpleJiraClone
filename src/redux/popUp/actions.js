const actions = {
  SHOW_POPUP: 'SHOW_POPUP',
  HIDE_POPUP: 'HIDE_POPUP',
  showPopup: payload => ({type: actions.SHOW_POPUP, payload}),
  hidePopup: payload => ({type: actions.HIDE_POPUP, payload})
};

export default actions;