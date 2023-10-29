import { Button, Fab, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import React from "react";
import TaskDrawer from "../taskDrawer/TaskDrawerContainer";

type AddTaskProps = {
  onAddClick: () => void
}

function AddTask({onAddClick}: AddTaskProps) {
  return (
    <>
      <Fab sx={{ position: 'absolute', bottom: 16, right: 16 }} color="primary" aria-label="add" onClick={onAddClick}>
        <AddIcon />
      </Fab>
      <TaskDrawer />
    </>
  );
}

export default AddTask;