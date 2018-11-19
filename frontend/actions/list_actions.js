import * as APIUtil from '../util/list_api_util';

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';

export const receiveLists = lists => ({
  type: RECEIVE_LISTS,
  lists
});

export const receiveList = list => ({
  type: RECEIVE_LIST,
  list
});

export const removeList = list_id => ({
  type: REMOVE_LIST
});

export const createList = (user_id, list) => dispatch => (
  APIUtil.createList(user_id, list).then(list => (
      dispatch(receiveList(list))
  ))
);

export const fetchLists = (user_id) => dispatch => (
  APIUtil.fetchLists(user_id).then(lists => (
    dispatch(receiveLists(lists))
  ))
);
