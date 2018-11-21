export const fetchTasks = list_id => (
  $.ajax({
    method: 'GET',
    url: `/api/lists/${list_id}/tasks`,
  })
);

// export const fetchList = (user_id, list_id) => (
//   $.ajax({
//     method: 'GET',
//     url: `/api/users/${user_id}/lists/${list_id}`
//   })
// );

export const createTask = (list_id, task) => (
  $.ajax({
    method: 'POST',
    url: `/api/lists/${list_id}/tasks`,
    data: { task }
  })
);

export const updateList = (list_id, task) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/lists/${list_id}/tasks/${task.id}`,
    data: { task }
  })
);

export const removeList = (list_id, task_id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/lists/${list_id}/tasks/${task_id}`
  })
);
