import Error from "@mui/icons-material/ErrorRounded";
import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import "./MaintenanceModal.scss";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: 4,
};

type MaintenanceModalType = {
  modalOpen: boolean;
  toggleModal: () => void;
  message: string;
};

const MaintenanceModal = ({modalOpen, toggleModal, message}: MaintenanceModalType) => (
  <Modal open={modalOpen} onClose={toggleModal} className="maintenance">
    <Box sx={style}>
      <div className="maintenance__title">
        <Error fontSize="large" color="warning" />
        <Typography variant="h6">
          Beta Mode
        </Typography>
      </div>
      <Typography variant="subtitle1">{message}</Typography>
    </Box>
  </Modal>
);

export default MaintenanceModal;