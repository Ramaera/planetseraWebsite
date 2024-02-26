import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../types/user";
export type UserState = {
  data: UserType | undefined;
};

const initialState: UserState = {
  data: undefined,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setOrUpdateUser: (state, action) => {
      // console.log("action.payload", action.payload);
      state.data = action.payload;
    },
    logout: (state) => {
      state.data = undefined;
      localStorage.clear();

      window.location.reload();
      return initialState;
    },
  },
});

export const { setOrUpdateUser, logout } = userSlice.actions;

export default userSlice.reducer;
