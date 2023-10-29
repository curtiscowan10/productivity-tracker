import React from "react";
import "./Page.scss";
import AppBar from "../drawerMenu/appBar/AppBarContainer";
import Drawer from "../drawerMenu/drawer/DrawerContainer";
import PageRoutes from "../routes/PageRoutes";
import Snackbar from "../snackbar/SnackbarContainer";

const Page = () => (
  <div className="page__container">
    <AppBar />
    <div className="page__content">
      <Drawer />
      <PageRoutes />
      <Snackbar />
    </div>
  </div>
);

export default Page;
