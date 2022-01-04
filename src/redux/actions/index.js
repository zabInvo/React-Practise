import { all } from "redux-saga/effects";

import adminSaga from "../actions/adminSaga"
import userSaga from "../actions/usersSaga"


// ADD MULTIPLE SAGA
function* rootSaga() {
  yield all([
    adminSaga(),
    userSaga()
  ])
}

export default rootSaga;