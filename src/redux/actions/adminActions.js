import service from "../../services/axiosService";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQxMjA3NjE2LCJleHAiOjE2NDEyNTA4MTZ9.cJSeyPkQaOtsDMxzBsTjML3cNrLZnbu_WJyhTZigT5I";

const fetchCompanies = () => async (dispatch) => {
  try {
    const companies = await service.post("company/getCompanies", token, "");
    console.log("these are company data ", companies);
    dispatch({ type: "FETCH_COMPANIES", payload: companies.data.data });
  } catch (error) {
    console.log(error);
  }
};

const deleteCompany = (payload) => async (dispatch) => {
  try {
    const data = {
      id: payload,
    };
    // const company = await service.post("company/delete", token, data);
    // console.log("these are company data ", company);
    dispatch({ type: "DELETE_COMPANY", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export { fetchCompanies , deleteCompany };
