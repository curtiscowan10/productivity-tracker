import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import DarkModeToggle from "./darkModeToggle/DarkModeToggleContainer";
import Typography from "@mui/material/Typography";
import { NavigationItems } from "../../../constants/NavigationItems";

type AppBarProps = {
  handleDrawerToggle: () => void;
  pageTitle: string;
};

const AppBar = ({ handleDrawerToggle, pageTitle }: AppBarProps) => {
  return (
    <MuiAppBar
      component="nav"
      position="relative"
      sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          component="label"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
          sx={{
            display: { sm: "none" },
          }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" noWrap sx={{ flexGrow: 1, marginLeft: 1, display: { sm: 'none'} }}>
          {pageTitle}
        </Typography>
        <DarkModeToggle />
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
