import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "./Snackbar";
import { resetSnackbar } from "../../store/ui/uiActions";
import { snackbarMessage, snackbarType } from "../../store/ui/uiSelectors";

function SnackbarContainer() {
  const dispatch = useDispatch();
  const message = useSelector(snackbarMessage);
  const type = useSelector(snackbarType);

  const onClose = () => {
    dispatch(resetSnackbar());
  }

  return <Snackbar message={message} type={type} handleClose={onClose} />
}

export default SnackbarContainer;