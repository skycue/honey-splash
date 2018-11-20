import { connect } from 'react-redux';
import React from 'react';
import { createList, updateList } from '../../actions/list_actions';
import ListForm from './list_form';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id,
    selectedListId: state.ui.selectedListId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (currentUserId, list, instruction) => {
      if (instruction == 'Add') {
        return dispatch(createList(currentUserId, list))
      } else if (instruction == 'Save') {
        return dispatch(updateList(currentUserId, list))
      }
    },
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
