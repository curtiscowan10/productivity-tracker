import LinkBase from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { useTheme } from '@mui/material/styles';
import { Link } from "react-router-dom";
import {
  NavigationItems,
  NavigationItemType,
} from "../../../../constants/NavigationItems";
import "./DrawerItems.scss";
import useMediaQuery from "@mui/material/useMediaQuery";

type DrawerItemsProps = {
  onClick: () => void;
}

const DrawerItems = ({onClick}: DrawerItemsProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <List>
      {NavigationItems.map(({ icon, text, url, mobileOnly }: NavigationItemType) => {
        if (mobileOnly && !isMobile) {
          return null;
        }
        return (
          <LinkBase component={Link} to={url} key={text} underline="none" onClick={onClick}>
            <ListItem disablePadding className="drawer__menuItem">
              <ListItemButton>
                {icon}
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </LinkBase>
        );
      })}
    </List>
  )
}
export default DrawerItems;