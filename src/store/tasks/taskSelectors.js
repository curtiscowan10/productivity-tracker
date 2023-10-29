import { createSelector } from "reselect";
import { Task } from "./taskTypes";

const tasksState = (state) => state.tasks;

const getAllTasks = createSelector(tasksState, (tasks) => {
  return tasks.tasks ?? [];
});

const getSelectedTask = createSelector(tasksState, (tasks) => {
  return tasks.tasks[tasks.selectedTaskId];
});

const getSelectedTaskId = createSelector(tasksState, (tasks) => {
  return tasks?.selectedTaskId ?? null;
});

const getProgressValue = (state, name) => {
  const namedTasks = state.tasks.tasks.filter((task) => task.category === name);
  if (namedTasks.length === 0) return null;
  const completedTasks = namedTasks.filter((task) => task.isCompleted);
  return (completedTasks.length / namedTasks.length) * 100;
};

const getOverallProgressValue = (state, name) => {
  const tasks = state.tasks.tasks;
  if (tasks.length === 0) return null;
  const completedTasks = tasks.filter((task) => task.isCompleted);
  return (completedTasks.length / tasks.length) * 100;
};

export {
  getAllTasks,
  getSelectedTask,
  getSelectedTaskId,
  getProgressValue,
  getOverallProgressValue,
};
