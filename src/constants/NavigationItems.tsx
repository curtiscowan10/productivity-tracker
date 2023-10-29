import AccountCircle from "@mui/icons-material/AccountCircle";
import React, { ReactElement } from "react";
import { RouteUrls } from "./RouteUrls";
import { QueryStats } from "@mui/icons-material";

export type NavigationItemType = {
  icon: ReactElement
  text: string,
  url: string,
  mobileOnly?: boolean
}

export const NavigationItems: Array<NavigationItemType> = [
  {icon: <AccountCircle />, text: "Daily Tasks", url: RouteUrls.home},
  {icon: <QueryStats />, text: "Daily Stats", url: RouteUrls.stats, mobileOnly: true}
];