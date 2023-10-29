import { Button, Drawer, IconButton, Paper, Typography } from '@mui/material';
import React, { FormEventHandler } from 'react';
import FormTextField from '../../../../../common/form/textField/FormTextField';
import FormSelect from '../../../../../common/form/select/FormSelect';
import "./TaskDrawer.scss";
import FormRadioGroup from '../../../../../common/form/radioGroup/FormRadioGroup';
import { TaskCategories } from '../../../../../constants/Categories';
import Priorities from '../../../../../constants/Priorities';
import CloseIcon from "@mui/icons-material/Close";

type onSubmitType = (data: any) => void;

type TaskDrawerProps = {
  isOpen: boolean,
  isEditMode: boolean,
  onClose: () => void,
  onSubmit: onSubmitType;
  handleSubmit: (type: onSubmitType) => FormEventHandler<HTMLFormElement>;
  control: any,
  descriptionRef?: any
};

function TaskDrawer({isOpen, isEditMode, onClose, onSubmit, handleSubmit, control, descriptionRef}: TaskDrawerProps) {
  return (
    <Drawer 
      anchor="right" 
      open={isOpen} 
      onClose={onClose} 
      sx={{ zIndex: theme => theme.zIndex.drawer + 2}}
    >
      <div className="taskDrawer">
        <div className="taskDrawer__title">
          <Typography variant="h4">
            {isEditMode ? 'Edit Task' : 'Add Task'}
          </Typography>
          <IconButton aria-label="close" onClick={onClose}>
            <CloseIcon fontSize='large'/>
          </IconButton>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex", flexDirection: "column"}}>
          <FormTextField
            ref={descriptionRef}
            name="description" 
            label='Description' 
            control={control} 
            required
          />
          <FormRadioGroup
            control={control}
            formName="category"
            formLabel="Category"
            formOptions={[
              {value: TaskCategories.General, label: "General"},
              {value: TaskCategories.Work, label: "Work"},
              {value: TaskCategories.Housework, label: "Housework"},
              {value: TaskCategories.PersonalProjects, label: "Projects"}
            ]}
          />
          <FormRadioGroup
            control={control}
            formName="priority"
            formLabel="Priority"
            formOptions={[
              {value: Priorities.Low, label: "Low"},
              {value: Priorities.Medium, label: "Medium"},
              {value: Priorities.High, label: "High"}
            ]}
          />
          <Button className="taskDrawer__submit" variant="contained" color="primary" type="submit">
            {isEditMode ? 'Update' : 'Add'}
          </Button>
        </form>
      </div>
    </Drawer>
  );
}

export default TaskDrawer;