import { combineReducers } from "redux";
import { companyReducers } from "./adminReducer";

const reducer = combineReducers({
  companyReducers: companyReducers,
});

export default reducer;
