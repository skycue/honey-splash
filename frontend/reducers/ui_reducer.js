import { OPEN_MODAL } from '../actions/modal_actions';

export default function uiReducer(state = {}, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, action.options);
    default:
      return state;
  }
}
