import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  role: "",
  user: {},
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsLoggedIn: (state) => {
      state.isLoggedIn = state.isLoggedIn === false ? true : false;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setIsLoggedIn, setRole, setUser } = globalSlice.actions;

export default globalSlice.reducer;
