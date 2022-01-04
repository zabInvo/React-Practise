import { createReducer } from "@reduxjs/toolkit";

const initalState = {
  companies: [],
};

const adminReducer = createReducer(initalState, (builder) => {
  builder.addCase("FETCH_COMPANIES_SUCCESS", (state, action) => {
    state.companies = action.payload;
  });
  builder.addCase("DELETE_COMPANY_SUCCESS", (state, action) => {
    state.companies = state.companies.filter((item) => {
      return item.id !== action.payload.id;
    });
  });
});

export default adminReducer;
