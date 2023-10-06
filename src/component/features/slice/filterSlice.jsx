import { createSlice } from "@reduxjs/toolkit";
import { Items } from "../../constants/items";

const initialState = {
  blog: [],
  categoryBlog:Items,
  total: 0,
  isloading: 0,
};
const blogFilterSlice = createSlice({
  name: "blogFilter",
  initialState,
  reducers: {
    sortLatest: (state) => {
      state.blog = state.blog.reverse();
    },
    getPosts: (state, { payload }) => {
 
      console.log(payload.data,"payload")
    },
    Categoryfilter: (state, { payload }) => {
      if (payload === "All Posts") {
        state.categoryBlog = state.blog;
        console.log(state.categoryBlog, "yes");
      } else {
        state.categoryBlog = state.blog.filter(
          (items) => items.category === payload
        );
        console.log(state.categoryBlog, "no");
      }
    },
  },
});
export const { sortLatest, Categoryfilter, getPosts } = blogFilterSlice.actions;
export default blogFilterSlice.reducer;
