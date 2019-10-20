import POPUP_ACTIONS from './actions';

const defaultSate = {
  isHidden: false,
  component:'createTask'
};

export default function popupReducer(state = defaultSate, action) {
  const {type, payload} = action;

  switch (type) {
    case POPUP_ACTIONS.SHOW_POPUP: {
      return {
        ...state,
        isHidden: false,
        component: payload.component,
        additionalData: payload.additionalData
      }
    }
    case POPUP_ACTIONS.HIDE_POPUP: {
      return {...state, isHidden: true, component: false,}
    }
    default:
      return state
  }
};