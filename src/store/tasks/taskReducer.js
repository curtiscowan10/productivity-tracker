import { TOGGLE_TASK_DRAWER_OPEN } from "../ui/uiTypes";
import { DELETE_TASK, SAVE_TASK, SORT_TASKS, TOGGLE_COMPLETE_CHECKBOX, UPDATE_TASK } from "./taskTypes";

const INITIAL_STATE = {
  tasks: [],
  selectedTaskId: null,
};

function onSaveTask(state, {task}) {
  const newTask = {
    ...task,
    isCompleted: false,
  };
  return {
    ...state,
    tasks: [...state.tasks, newTask],
  };
}

function onUpdateTask(state, { task }) {
  const newTask = {
    ...task,
    isCompleted: false,
  };
  const tasks = state.tasks.map((t, index) => {
    return index === state.selectedTaskId ? newTask : t;
  });
  return {
    ...state,
    tasks,
  };
}

function onSetSelectedTaskId(state, { id }) {
  return {
    ...state,
    selectedTaskId: id
  };
}


function onDeleteTask(state, { id }) {
  const tasks = state.tasks.filter((task, index) => index !== id);
  return {
    ...state,
    tasks,
  };
}

function onSortTasks(state, { sortBy, sortDirection }) {
  // Updates tasks array with sorted tasks including isCompleted boolean
  const tasks = [...state.tasks].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return sortDirection === "asc" ? -1 : 1;
    }
    if (a[sortBy] > b[sortBy]) {
      return sortDirection === "asc" ? 1 : -1;
    }
    return 0;
  });
  return {
    ...state,
    tasks,
  };
}


function onToggleCompleteCheckbox(state, { id }) {
  const tasks = state.tasks.map((task, index) => {
    if (index === id) {
      return {
        ...task,
        isCompleted: !task.isCompleted,
      };
    }
    return task;
  });
  return {
    ...state,
    tasks,
  };
}


export default function taskReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SAVE_TASK:
      return onSaveTask(state, action);
    case UPDATE_TASK:
      return onUpdateTask(state, action);
    case TOGGLE_TASK_DRAWER_OPEN:
      return onSetSelectedTaskId(state, action);
    case DELETE_TASK:
      return onDeleteTask(state, action);
    case SORT_TASKS:
      return onSortTasks(state, action);
    case TOGGLE_COMPLETE_CHECKBOX:
      return onToggleCompleteCheckbox(state, action);
    default:
      return state;
  }
}
