import { createSlice } from "@reduxjs/toolkit";
import { Items } from "../../constants/items";
// import { current } from "@reduxjs/toolkit";
const initialState = {
  blog: Items,
  categoryBlog: Items,
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
    Categoryfilter: (state, { payload }) => {
      if ((payload === "All Posts")) {
        state.categoryBlog = state.blog;
        console.log((state.categoryBlog),"yes");
      } else {
        state.categoryBlog = state.blog.filter(
          (items) => items.category === payload
        );
                console.log((state.categoryBlog),"no");

      }
    },
  },
});
export const { sortLatest, Categoryfilter } = blogFilterSlice.actions;
export default blogFilterSlice.reducer;
