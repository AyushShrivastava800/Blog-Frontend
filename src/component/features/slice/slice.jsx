    import { createSlice } from "@reduxjs/toolkit";
    import { Items } from "../../constants/items";
    import { current } from "@reduxjs/toolkit";
    const initialState={
        blog:Items,
        total:0,
        isloading:0,
    };

    const blogSlice=createSlice({
        name:'blog',
        initialState,
        reducers:{
            addBlog:(state,{payload})=>{
                console.log(current(state));
            }
        }
    });

    export const {addBlog}=blogSlice.actions;
    export default blogSlice.reducer;