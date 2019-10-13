import navigationActions from './actions';

const defaultState = {
  isWidthFixed: true,
  isCollapsed: false
};

export default function (state = defaultState, action) {
  const {type, payload} = action;

  switch (type) {
    case navigationActions.FIX_NAVIGATION_WIDTH: {
      return {...state, isWidthFixed: payload, isCollapsed: !payload}
    }
    case navigationActions.COLLAPSE_NAVIGATION: {
      return {...state, isCollapsed: payload}
    }
    default:
      return state;
  }

};