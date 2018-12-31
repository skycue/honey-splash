import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TaskItem from './task_item';
import { selectTask, deselectTask, setCurrentTaskForm, removeTaskFormId } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    task: ownProps.task,
    tasks: state.entities.tasks,
    currentListId: state.ui.currentListId,
    currentTaskFormId: state.ui.currentTaskFormId,
    closeTaskFormIds: state.ui.closeTaskFormIds
  }
};

const mapDispatchToProps = dispatch => {
  return {
    selectTask: (selectedTask) => dispatch(selectTask(selectedTask)),
    deselectTask: (selectedTask) => dispatch(deselectTask(selectedTask)),
    removeTaskFormId: () => dispatch(removeTaskFormId()),
    setCurrentTaskForm: (task) => dispatch(setCurrentTaskForm(task))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskItem));
