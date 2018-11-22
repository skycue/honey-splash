import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { createList, fetchLists } from '../../actions/list_actions';
import ListSidebar from './list_sidebar';
import { deleteList, setCurrentList } from '../../actions/list_actions';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id,
    lists: Object.keys(state.entities.lists).map(list_id => state.entities.lists[list_id]),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLists: (user_id) => dispatch(fetchLists(user_id)),
    deleteList: (user_id, list_id) => dispatch(deleteList(user_id, list_id)),
    setCurrentList: (list_id) => dispatch(setCurrentList(list_id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListSidebar));
