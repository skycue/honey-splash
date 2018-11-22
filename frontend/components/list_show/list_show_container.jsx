import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListShow from './list_show';
import { createTask, fetchTasks } from '../../actions/task_actions';

const mapStateToProps = ({entities: { tasks }, entities: { lists }, ui: {currentListId}}) => {
  const currentList = lists[currentListId];
  const currentTasks = [];
  if (currentList) {
    currentList.task_ids.forEach(id => {
      if (tasks[id]) {
        debugger
        currentTasks.push(tasks[id]);
      }
    })
  }
  return {
    currentList,
    tasks: currentTasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createTask: (list_id, task) => {
      return dispatch(createTask(list_id, task))
    },
    fetchTasks: (list_id) => dispatch(fetchTasks(list_id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListShow));
