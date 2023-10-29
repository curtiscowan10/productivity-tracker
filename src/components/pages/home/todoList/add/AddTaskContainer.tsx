import React from "react";
import AddTask from "./AddTask";
import { useDispatch } from "react-redux";
import { toggleTaskDrawerOpen } from "../../../../../store/ui/uiActions";

function AddTaskContainer() {
  const dispatch = useDispatch();
  const onAddClick = () => {
    dispatch(toggleTaskDrawerOpen());
  };

  return <AddTask onAddClick={onAddClick} />
}

export default AddTaskContainer;