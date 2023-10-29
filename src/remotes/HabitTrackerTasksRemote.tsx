import React from "react";
import {Provider, useSelector} from "react-redux";
import { persistor, store } from "../store/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import HomeContainer from "../components/pages/home/HomeContainer";

function HabitTrackerTasksRemote() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HomeContainer />
      </PersistGate>
    </Provider>
  )
}

export default HabitTrackerTasksRemote;