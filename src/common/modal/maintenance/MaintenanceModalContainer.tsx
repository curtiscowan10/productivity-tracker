import React, {useState, useEffect} from "react";
import MaintenanceModal from "./MaintenanceModal";

type MaintenanceModalContainerProps = {
  message: string
}

function MaintenanceModalContainer({message}: MaintenanceModalContainerProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const onToggle = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    setModalOpen(true);
  }, []);

  return <MaintenanceModal modalOpen={modalOpen} toggleModal={onToggle} message={message} />
}

export default MaintenanceModalContainer;