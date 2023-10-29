import Alert, { AlertColor } from "@mui/material/Alert";
import MuiSnackbar from "@mui/material/Snackbar";
import React from "react";


type SnackbarProps = {
  message?: string,
  type?: AlertColor,
  handleClose: () => void
};

function Snackbar({message, type, handleClose}: SnackbarProps) {
  if (!message && !type) {
    return null;
  }
  return (
    <MuiSnackbar open autoHideDuration={3000} onClose={handleClose}>
      <Alert severity={type}>{message}</Alert>
    </MuiSnackbar>
  )
}

export default Snackbar;