import {
  SAVE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  SORT_TASKS,
  TOGGLE_COMPLETE_CHECKBOX
} from "./taskTypes";

export function saveTask(task) {
  return {
    type: SAVE_TASK,
    task
  };
}

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    id
  };
}

export function updateTask(task) {
  return {
    type: UPDATE_TASK,
    task
  };
}

export function sortTasks(sortBy, sortDirection) {
  return {
    type: SORT_TASKS,
    sortBy,
    sortDirection
  };
}


export function toggleCompleteCheckbox(id) {
  return {
    type: TOGGLE_COMPLETE_CHECKBOX,
    id,
  };
}
