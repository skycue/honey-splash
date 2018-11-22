import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TaskItem from './task_item';
import { selectTask, deselectTask } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
  
  return {
    task: ownProps.task,
    tasks: state.entities.tasks,
    currentListId: state.ui.currentListId
  }
};

const mapDispatchToProps = dispatch => {
  return {
    selectTask: (selectedTask) => dispatch(selectTask(selectedTask)),
    deselectTask: (selectedTask) => dispatch(deselectTask(selectedTask))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskItem));
