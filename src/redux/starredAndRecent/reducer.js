import starredAndRecentAActions from './actions';

const defaultState = {
  isShown: false
};

export default function (state = defaultState, action) {
  const {type, payload} = action;

  switch (type) {
    case starredAndRecentAActions.SHOW_COMPONENT: {
      return {...state, isShown: true}
    }
    case starredAndRecentAActions.HIDE_COMPONENT: {
      return {...state, isShown: false}
    }
    default:
      return state
  }
}