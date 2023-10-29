import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Drawer from "./Drawer";
import { toggleDrawerOpen } from "../../../store/ui/uiActions";
import { isDrawerOpen } from "../../../store/ui/uiSelectors";

function DrawerContainer() {
  const dispatch = useDispatch();

  const open = useSelector(isDrawerOpen);

  const handleDrawerToggle = () => {
    dispatch(toggleDrawerOpen());
  };

  return <Drawer handleDrawerToggle={handleDrawerToggle} open={open} />;
}

export default DrawerContainer;
