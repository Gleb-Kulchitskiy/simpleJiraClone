import CREATE_ISSUE_ACTIONS from './actions';

const defaultState = {
  activeFields: [
    'affectVersions',
    'assignee',
    'attachment',
    'components',
    'description',
    'environment',
    'epicLinc',
    'fixVersion',
    'labels',
    'linkedIssues',
    'priority',
    'summary'
  ],
  activeSettings: false
};

export default function createIssueReducer(state = defaultState, action) {
  const {type, payload} = action;

  switch (type) {
    case CREATE_ISSUE_ACTIONS.SET_ACTIVE_FIELDS: {
      return {...state, activeFields: payload.activeFields}
    }
    case CREATE_ISSUE_ACTIONS.TOGGLE_SETTINGS: {
      return {...state, activeSettings: !state.activeSettings}
    }

    case CREATE_ISSUE_ACTIONS.TOGGLE_FIELD: {
      const idx = state.activeFields.indexOf(payload.field);

      const newFields = [...state.activeFields];
      idx > 0 ? newFields.splice(idx, 1) : newFields.push(payload.field);

      return {...state, activeFields: newFields}
    }
    default:
      return state
  }
}