import { connect } from 'react-redux';
import React from 'react';
import { createList } from '../../actions/list_actions';
import ListSidebar from './list_sidebar';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLists: (user_id) => dispatch(fetchLists(user_id))
  };
};

export default connect(null, mapDispatchToProps)(ListSidebar);
