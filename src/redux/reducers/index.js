import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import userReducer from "./userReducerNewMethod";

const reducer = combineReducers({
  adminReducer: adminReducer,
  userReducer: userReducer,
});

export default reducer;
