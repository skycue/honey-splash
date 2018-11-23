import { OPEN_MODAL } from '../actions/modal_actions';
import { SET_CURRENT_LIST } from '../actions/list_actions';
import { SELECT_TASK, DESELECT_TASK, DESELECT_ALL_TASKS, REMOVE_TASK, SET_CURRENT_TASK_FORM,
  CLOSE_TASK_FORM, REMOVE_TASK_FORM_ID } from '../actions/task_actions';

export default function uiReducer(state = {selectedTasks: [], closeTaskFormIds: [], close}, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, action.options);
    case SET_CURRENT_LIST:
      return Object.assign({}, state, {currentListId: action.list_id})
    case SELECT_TASK:
      state.selectedTasks.push(action.task.id);
      return Object.assign({}, state);
    case SET_CURRENT_TASK_FORM:
      state.closeTaskFormIds.push(action.task.id);
      return Object.assign({}, state, {currentTaskFormId: action.task.id});
    case DESELECT_ALL_TASKS:
      return Object.assign({}, state, {selectedTasks: []})
    case REMOVE_TASK_FORM_ID:
      state.closeTaskFormIds.splice(0, 1);
      return Object.assign({}, state);
    case CLOSE_TASK_FORM:
      // state.closeTaskFormIds.push()
      return Object.assign({}, state, {closeTaskFormId: action.task.id})
    case REMOVE_TASK:
    case DESELECT_TASK:
      state.selectedTasks.splice(state.selectedTasks.indexOf(action.task.id), 1);
      return Object.assign({}, state);
    default:
      return state;
  }
}
