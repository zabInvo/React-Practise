import { call, put, takeLatest, takeEvery } from "redux-saga/effects";

import { GET_USERS, DELETE_USERS } from "../reducers/userReducerNewMethod";
import service from "../../services/axiosService";

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQxMjk0MzEyLCJleHAiOjE2NDEzMzc1MTJ9.YtcvbSge7BwCCAh3LnauZjkDa69Ggo2-Sj6O65m4iUo";

const fetchUsersApi = async (id) => {
  try {
    const payload = {
      companyId: id.companyId,
    };
    const getUsers = await service.post("salary/getAllSalary", token, payload);
    return getUsers.data.company.Employees;
  } catch (error) {
    console.log(error);
  }
};

function* fetchUsers(id) {
  try {
    const users = yield call(fetchUsersApi, id);
    yield put(GET_USERS(users));
  } catch (error) {
    // yield put({type:'FETCH_COMPANIES_FAILED',message:error.message});
    console.log(error);
  }
}

function* userSaga() {
  yield takeLatest("FETCH_USERS_REQUEST", fetchUsers);
}

export default userSaga;
