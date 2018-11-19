import merge from 'lodash/merge';

import { RECEIVE_LISTS, RECEIVE_LIST, REMOVE_LIST } from '../actions/list_actions';

const listsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTS:
      // const lists= {};
      // action.lists.forEach(list => {
      //   lists[list.id] = list;
      // });
      // return lists;
      return merge({}, state, action.lists)
    case RECEIVE_LIST:
      return merge({}, state, { [action.list.id]: action.list })
    case REMOVE_LIST:
      let newState = merge({}, state)
      delete newState[action.list_id]
    default:
      return state;
  }
}

export default listsReducer;
