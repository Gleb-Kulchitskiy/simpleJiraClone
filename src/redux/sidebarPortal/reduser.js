import PortalActions from './actions';

const defaultState = {
  isHidden: true
};

export default function (state = defaultState, action) {

  switch (action.type) {
    case PortalActions.SHOW_PORTAL: {
      return {...state, isHidden: false}
    }
    case PortalActions.HIDE_PORTAL: {
      return {...state, isHidden: true}
    }
    default:
      return state;
  }
}