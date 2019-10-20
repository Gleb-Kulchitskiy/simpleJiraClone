const actions = {
  SET_ACTIVE_FIELDS: 'SET_ACTIVE_FIELDS',
  TOGGLE_SETTINGS: 'TOGGLE_SETTINGS',
  TOGGLE_FIELD:'TOGGLE_FIELD',
  setActiveFields: payload => ({type: actions.SET_ACTIVE_FIELDS, payload}),
  toggleSettings: payload => ({type: actions.TOGGLE_SETTINGS}),
  toggleField: payload =>({type:actions.TOGGLE_FIELD, payload})
};

export default actions;