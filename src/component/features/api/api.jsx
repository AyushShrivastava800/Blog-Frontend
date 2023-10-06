import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserApi = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3030" }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/posts",
    }),
    addUser: builder.mutation({
      query: (newUser) => ({
        url: "/posts",
        method: "POST",
        body: newUser,
      }),
    }),
    getallposts: builder.query({
      query: () => "/blogs",
    }),
    addposts: builder.mutation({
      query: (newPost) => ({
        url: "/blogs",
        method: "POST",
        body: newPost,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    }),
  }),
});

export const {
  useLazyGetAllUsersQuery,
  useAddUserMutation,
  useLazyGetallpostsQuery,
  useAddpostsMutation,
} = UserApi;
