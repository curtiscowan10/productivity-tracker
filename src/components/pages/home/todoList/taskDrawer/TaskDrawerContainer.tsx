import React, { useEffect, useRef } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import TaskDrawer from "./TaskDrawer";
import { useDispatch, useSelector } from "react-redux";
import { isTaskDrawerOpen } from "../../../../../store/ui/uiSelectors";
import { getSelectedTask, getSelectedTaskId } from "../../../../../store/tasks/taskSelectors";
import { toggleTaskDrawerOpen } from "../../../../../store/ui/uiActions";
import { useForm } from "react-hook-form";
import { taskValidationSchema } from "../../../../../common/utils/validation/taskValidationSchema";
import { TaskCategories } from "../../../../../constants/Categories";
import Priorities from "../../../../../constants/Priorities";
import { saveTask, updateTask } from "../../../../../store/tasks/taskActions";

function TaskDrawerContainer() {
  const descriptionRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const isOpen = useSelector(isTaskDrawerOpen);
  const selectedTask = useSelector(getSelectedTask);
  const selectedTaskId = useSelector(getSelectedTaskId);
  const onClose = () => {
    dispatch(toggleTaskDrawerOpen());
  };

  const {control, handleSubmit, reset } = useForm({
    resolver: yupResolver(taskValidationSchema),
    defaultValues: {
      description: "",
      category: TaskCategories.General,
      priority: Priorities.Low
    },
  });
  
  useEffect(() => {
    if (selectedTaskId !== null) {
      reset(selectedTask);
    } else {
      reset({
        description: "",
        category: TaskCategories.General,
        priority: Priorities.Low
      })
    }
  }, [selectedTaskId]);


  const onSubmit = (data: any) => {
    if(selectedTask) {
      dispatch(updateTask(data));
      reset();
      dispatch(toggleTaskDrawerOpen());
    } else {
      dispatch(saveTask(data));
      console.log(descriptionRef.current);
      descriptionRef.current?.focus();
    }
  };
  
  return (
    <TaskDrawer isEditMode={Boolean(selectedTask)} handleSubmit={handleSubmit} isOpen={isOpen} onClose={onClose} onSubmit={onSubmit} control={control} descriptionRef={descriptionRef} />
  );
}

export default TaskDrawerContainer