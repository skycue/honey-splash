import {
  RECEIVE_LIST_ERRORS,
  REMOVE_LIST_ERRORS
} from '../actions/list_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIST_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
    case REMOVE_LIST_ERRORS:
      return [];
    default:
      return state;
  }
};
