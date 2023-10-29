import React from "react";
import ProgressItem from "./ProgressItem";
import { TaskCategories, TaskCategoryLabels } from "../../../../../constants/Categories";
import { useSelector } from "react-redux";
import { getProgressValue } from "../../../../../store/tasks/taskSelectors";

type ProgressItemContainerProps = {
  name: keyof typeof TaskCategories,
};

function ProgressItemContainer({name}: ProgressItemContainerProps) {
  const progressValue = useSelector((state) => getProgressValue(state, name));
  const label = TaskCategoryLabels[name];
  if (progressValue === null) {
    return null;
  }
  return (
    <ProgressItem name={name} label={label} progressValue={progressValue} />
  );
}

export default ProgressItemContainer;