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

    profile: builder.query({
      query: () => ({
        url: "/my-profile",
        method: "GET",
        credentials: "include", // Ensure cookies are sent
      }),
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
} = userApi;
