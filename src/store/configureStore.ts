import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./configureSagas";
import uiReducer from "./ui/uiReducer";
import taskReducer from "./tasks/taskReducer";


const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer =
  combineReducers({
    ui: uiReducer,
    tasks: taskReducer,
  });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
