import { connect } from 'react-redux';
import React from 'react';
import { createList, fetchLists } from '../../actions/list_actions';
import ListSidebar from './list_sidebar';
import { deleteList } from '../../actions/list_actions';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id,
    lists: Object.keys(state.entities.lists).map(list_id => state.entities.lists[list_id]),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLists: (user_id) => dispatch(fetchLists(user_id)),
    deleteList: (user_id, list_id) => dispatch(deleteList(user_id, list_id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListSidebar);
