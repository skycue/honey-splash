import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deselectTask } from '../../actions/task_actions';
import TaskEditForm from './task_edit_form';

const mapStateToProps = (state) => {
   //Should hit every single time something is clicked
  return {
    tasks: state.entities.tasks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deselectTask: (task) => dispatch(deselectTask(task))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskEditForm));
