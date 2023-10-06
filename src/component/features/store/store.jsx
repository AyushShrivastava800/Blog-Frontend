import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../slice/slice";
import blogFilterReducer from "../slice/filterSlice";
import { UserApi } from "../api/api";
export const store = configureStore({
  reducer: {
    blog: blogReducer,
    blogFilter: blogFilterReducer,
    [UserApi.reducerPath]: UserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UserApi.middleware),
});
