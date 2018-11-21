export const fetchTasks = list_id => (
  $.ajax({
    method: 'GET',
    url: `/api/lists/${list_id}/tasks`,
  })
);

export const createTask = (list_id, task) => {
  return $.ajax({
    method: 'POST',
    url: `/api/lists/${list_id}/tasks`,
    data: { task }
  })
}

export const updateTask = (list_id, task) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/lists/${list_id}/tasks/${task.id}`,
    data: { task }
  })
);

export const removeTask = (list_id, task_id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/lists/${list_id}/tasks/${task_id}`
  })
);
