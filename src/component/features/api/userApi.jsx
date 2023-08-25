import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserApi = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/user/fetch",
      method: "GET",
    }),
    addUser: builder.mutation({
      query: (newUser) => ({
        url: "/user/signup",
        method: "POST",
        body: newUser,
        headers: {
          "Content-Type": "application/json", 
        },
      }),
    }),
    Login: builder.mutation({
      query: (credentials) => ({
        url: "/user/login",
        method: "POST",
        body: credentials,
        headers: {
          "Content-Type": "application/json", 
        },
      }),
    }),
  

    // deleteUser: builder.mutation({
    //   query: (id) => ({
    //     url: `users/${id}`,
    //     method: "DELETE",
    //   }),
    // }),
    // updateUser: builder.mutation({
    //   query: (id, User) => {
    //     const request = {
    //       url: `Users/${id}`,
    //       method: "PATCH",
    //       body: User,
    //     };
    
    //     console.log("Request URL:", request.url);
    //     console.log("Request Body:", request.body);
    
    //     return request;
    //   },
    // }),
    
  }),
});

export const {
  useLazyGetAllUsersQuery,
  useAddUserMutation,
  useLoginMutation,
 
  
//   useDeleteUserMutation,
//   useUpdateUserMutation,
} = UserApi;