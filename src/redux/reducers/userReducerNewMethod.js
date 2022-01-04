import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userReducer = createSlice({
  name: "User",
  initialState,
  reducers: {
    GET_USERS(state, action) {
      state.users = action.payload;
    },
    DELETE_USERS(state, action) {
      state.users = [];
    },
  },
});

export const { GET_USERS, DELETE_USERS } = userReducer.actions;
export default userReducer.reducer;
