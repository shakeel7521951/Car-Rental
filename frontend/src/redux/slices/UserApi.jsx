import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.user?.profile?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
    credentials: "include",
  }),
  endpoints: (builder) => ({
    userRegistration: builder.mutation({
      query: (userData) => ({
        url: "/sign-up",
        method: "POST",
        body: userData,
      }),
    }),

    login: builder.mutation({
      query: (userData) => ({
        url: "/login",
        method: "POST",
        body: userData,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),

    updatePassword: builder.mutation({
      query: (userData) => ({
        url: "/update-password",
        method: "PUT",
        body: userData,
        credentials: "include",
      }),
    }),

    updateProfile: builder.mutation({
      query: (formData) => ({
        url: "/update-profile",
        method: "PUT",
        body: formData,
        credentials: "include",
      }),
    }),

    profile: builder.query({
      query: () => ({
        url: "/my-profile",
        method: "GET",
        credentials: "include",
      }),
    }),

    allUsers: builder.query({
      query: () => ({
        url:'/all-users',
        method:"GET",
        credentials:"include"
      }),
    }),

    updateUserRole:builder.mutation({
      query:({userId,role})=>({
        url:"/update-user-role",
        method:'PUT',
        body:{userId,role},
        credentials:'include'
      })
    }),

    verifyUser: builder.mutation({
      query: ({ otp, email }) => ({
        url: "/verify-user",
        method: "POST",
        body: { otp, email },
      }),
    }),
  }),
});

export const {
  useUserRegistrationMutation,
  useVerifyUserMutation,
  useLoginMutation,
  useLogoutMutation,
  useProfileQuery,
  useUpdatePasswordMutation,
  useUpdateProfileMutation,
  useAllUsersQuery,
  useUpdateUserRoleMutation
} = userApi;
