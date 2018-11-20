import { connect } from 'react-redux';
import React from 'react';
import { createList } from '../../actions/list_actions';
import ListForm from './list_form';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (currentUserId, list) => dispatch(createList(currentUserId, list)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
