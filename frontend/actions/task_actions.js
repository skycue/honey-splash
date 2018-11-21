import * as APIUtil from '../util/task_api_util';

export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const SET_CURRENT_TASK = 'SET_CURRENT_TASKTask';

export const receiveTasks = tasks => ({
  type: RECEIVE_TASKS,
  tasks
});

export const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
});

export const removeTask = task_id => ({
  type: REMOVE_TASK,
  task_id
});

export const setCurrentTask = task_id => ({
  type: SET_CURRENT_TASK,
  task_id
})

export const createTask = (list_id, task) => dispatch => (
  APIUtil.createTask(list_id, task).then(task => (
    dispatch(receiveTask(task))
  ))
);

export const updateTask = (list_id, task) => dispatch => {
  return APIUtil.updateTask(list_id, task).then(task => (
    dispatch(receiveTask(task))
  ), error => console.log(error.responesJSON)
  )
};

export const fetchTasks = (list_id) => dispatch => (
  APIUtil.fetchTasks(list_id).then(tasks => (
    dispatch(receiveTasks(tasks))
  ))
);

export const deleteTask = (list_id, task_id) => dispatch => (
  APIUtil.removeTask(list_id, task_id).then(task => (
    dispatch(removeTask(task.id))
  ))
);
