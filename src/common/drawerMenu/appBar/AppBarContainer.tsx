import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AppBar from "./AppBar";
import { toggleDrawerOpen } from "../../../store/ui/uiActions";
import { NavigationItems } from "../../../constants/NavigationItems";
import { useLocation } from 'react-router-dom';

function AppBarContainer() {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleDrawerToggle = () => {
    dispatch(toggleDrawerOpen());
  };

  const pageTitle = NavigationItems.find(({url}) => url ===location.pathname)?.text ?? '';
  return <AppBar handleDrawerToggle={handleDrawerToggle} pageTitle={pageTitle} />
}

export default AppBarContainer;