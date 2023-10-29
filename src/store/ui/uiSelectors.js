import { createSelector } from "reselect";

const uiState = state => state.ui;

const isDrawerOpen = createSelector(uiState, ui => {
  return ui?.drawerOpen ?? false;
});

const isTaskDrawerOpen = createSelector(uiState, (ui) => {
  return ui?.taskDrawerOpen ?? false;
});

const isDarkMode = createSelector(uiState, ui => {
  return ui?.darkMode ?? false;
});

const snackbarMessage = createSelector(uiState, ui => {
  return ui?.message ?? null;
});

const snackbarType = createSelector(uiState, ui => {
  return ui?.snackbarType ?? null;
});

export { isDrawerOpen, isTaskDrawerOpen, isDarkMode, snackbarMessage, snackbarType };
