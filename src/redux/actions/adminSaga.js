import { call, put, takeLatest, takeEvery } from "redux-saga/effects";

import service from "../../services/axiosService";

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQxMzY3Mjg5LCJleHAiOjE2NDE0MTA0ODl9.X0IZ3Aq7ksZ9fPgytKmBVeVPUiEApBtv_tUgInYS3G8";

const fetchCompaniesApi = async () => {
  try {
    const getCompanies = await service.post("company/getCompanies", token, "");
    return getCompanies.data.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteCompanyApi = async (id) => {
  try {
    const payload = {
      id: id,
    };
    // const deletedCompany = await service.post("company/delete", token, payload);
    return id;
  } catch (error) {
    console.log(error);
  }
};

function* fetchCompanies() {
  try {
    const company = yield call(fetchCompaniesApi);
    yield put({ type: "FETCH_COMPANIES_SUCCESS", payload: company });
  } catch (error) {
    // yield put({type:'FETCH_COMPANIES_FAILED',message:error.message});
    console.log(error);
  }
}

function* deleteCompany(id) {
  try {
    const companyToDelete = yield call(deleteCompanyApi, id);
    yield put({ type: "DELETE_COMPANY_SUCCESS", payload: companyToDelete });
  } catch (error) {
    console.log(error);
  }
}

function* adminSaga() {
  yield takeLatest("FETCH_COMPANIES_REQUEST", fetchCompanies);
  yield takeEvery("DELETE_COMPANY_REQUEST", deleteCompany);
}

export default adminSaga;
