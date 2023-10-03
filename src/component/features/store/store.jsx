import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../slice/slice";
import blogFilterReducer from "../slice/filterSlice";
export const store = configureStore({
  reducer: {
    blog: blogReducer,
    blogFilter: blogFilterReducer,
  },
});
