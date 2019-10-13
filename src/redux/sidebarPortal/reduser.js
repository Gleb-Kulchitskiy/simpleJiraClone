import PortalActions from './actions';

const defaultState = {
  isHidden: true,
  width: '600px'
};

export default function (state = defaultState, action) {

  switch (action.type) {
    case PortalActions.SHOW_PORTAL: {
      return {
        ...state,
        isHidden: false,
        component: action.payload.component,
        width: action.payload.width || defaultState.width,
        additionalData: action.payload.additionalData
      }
    }
    case PortalActions.HIDE_PORTAL: {
      return {...state, isHidden: true, component: false, width: defaultState.width}
    }
    default:
      return state;
  }
}