import { OPEN_MODAL } from '../actions/modal_actions';
import { SET_CURRENT_LIST } from '../actions/list_actions';

export default function uiReducer(state = {}, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, action.options);
    case SET_CURRENT_LIST:
      return Object.assign({}, state, {currentListId: action.list_id})
    default:
      return state;
  }
}
