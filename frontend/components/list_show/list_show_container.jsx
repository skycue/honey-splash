import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListShow from './list_show';
import { createTask, fetchTasks, deselectAllTasks, deleteTask, updateTask } from '../../actions/task_actions';
import { fetchLists } from '../../actions/list_actions';

const mapStateToProps = ({entities: { tasks }, session, entities: { lists }, ui: {selectedTasks, currentListId}}, ownProps) => {

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
    currentUserId: session.id,
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
    fetchTasks: (options) => dispatch(fetchTasks(options)),
    fetchLists: (user_id) => dispatch(fetchLists(user_id)),
    deselectAllTasks: () => dispatch(deselectAllTasks()),
    deleteTask: (list_id, task_id) => dispatch(deleteTask(list_id, task_id)),
    updateTask: (list_id, task) => dispatch(updateTask(list_id, task)),
    setCurrentList: (list_id) => dispatch(setCurrentList)
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListShow));
