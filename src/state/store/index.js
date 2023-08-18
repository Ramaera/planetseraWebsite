import { configureStore } from "@reduxjs/toolkit"
import colorUsReducer from "../slice/colorUsSlice"

export const store = configureStore({
  reducer: {
    colorUs: colorUsReducer,
  },
})
