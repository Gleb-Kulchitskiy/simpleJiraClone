import PORTAL_ACTIONS from './actions';

const defaultState = {
  isHidden: true,
  width: '600px'
};

export default function (state = defaultState, action) {
  const {type, payload} = action;

  switch (type) {
    case PORTAL_ACTIONS.SHOW_PORTAL: {
      return {
        ...state,
        isHidden: false,
        component: payload.component,
        width: payload.width || defaultState.width,
        additionalData: payload.additionalData
      }
    }
    case PORTAL_ACTIONS.HIDE_PORTAL: {
      return {...state, isHidden: true, component: false, width: defaultState.width}
    }
    default:
      return state;
  }
}