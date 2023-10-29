import { ForkEffect, all } from "redux-saga/effects";

const sagas: Array<ForkEffect> = [
];

export default function* rootSaga() {
  yield all([...sagas]);
}
