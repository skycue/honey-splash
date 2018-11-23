import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListShow from './list_show';
import { createTask, fetchTasks, deselectAllTasks, deleteTask, updateTask } from '../../actions/task_actions';

const mapStateToProps = ({entities: { tasks }, entities: { lists }, ui: {selectedTasks, currentListId}}) => {
  const currentList = lists[currentListId];
  const currentTasks = [];
  if (currentList) {
    currentList.task_ids.forEach(id => {
      if (tasks[id]) {
        currentTasks.push(tasks[id]);
      }
    })
  }
  return {
    currentList,
    currentTasks,
    tasks,
    selectedTasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createTask: (list_id, task) => {
      return dispatch(createTask(list_id, task))
    },
    fetchTasks: (list_id) => dispatch(fetchTasks(list_id)),
    deselectAllTasks: () => dispatch(deselectAllTasks()),
    deleteTask: (list_id, task_id) => dispatch(deleteTask(list_id, task_id)),
    updateTask: (list_id, task) => dispatch(updateTask(list_id, task))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListShow));
