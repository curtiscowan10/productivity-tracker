import React, { useState } from 'react';
import ActionsCell from './ActionsCell';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../../../../store/tasks/taskActions';
import { toggleTaskDrawerOpen } from '../../../../../store/ui/uiActions';

function ActionsCellContainer({id}: {id: number}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpenMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  const onDeleteClick = () => {
    handleCloseMenu();
    dispatch(deleteTask(id));
  };

  const onEditClick = () => {
    handleCloseMenu();
    dispatch(toggleTaskDrawerOpen(id));
  };
  
  return (
    <ActionsCell onDeleteClick={onDeleteClick} onEditClick={onEditClick} anchorEl={anchorEl} handleCloseMenu={handleCloseMenu} handleOpenMenu={handleOpenMenu} />
  );
}

export default ActionsCellContainer;