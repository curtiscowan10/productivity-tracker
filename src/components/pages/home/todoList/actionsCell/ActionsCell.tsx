import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Menu } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import React from 'react';

type ActionsCellProps = {
  onEditClick: () => void,
  onDeleteClick: () => void
  anchorEl: any,
  handleCloseMenu: () => void,
  handleOpenMenu: (event: any) => void
}

function ActionsCell({onEditClick, onDeleteClick, anchorEl, handleCloseMenu, handleOpenMenu}: ActionsCellProps) {
  return (
    <>
       <IconButton
        aria-label="edit"
        aria-haspopup="true"
        onClick={handleOpenMenu}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <IconButton aria-label="edit" onClick={onEditClick}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={onDeleteClick}>
          <DeleteIcon />
        </IconButton>
      </Menu>
    </>
  );
}

export default ActionsCell;