import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const rootApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => {
    return {
      // mutation laf thay doi du lieu vi du nhu post con query la get
      register: builder.mutation({
        query: ({ fullName, email, password }) => {
          return {
            // nhu lam postman
            url: "/signup", 
            body: { fullName, email, password },
            method: "POST",
          };
        },
      }),
      login: builder.mutation({
        query: ({email, password}) => {
          return{
            url: "/login",
            body: {email, password},
            method: "POST"
          }
        }
      }),
      verifyOTP: builder.mutation({
        query: ({email, otp}) => {
          return{
            url: '/verify-otp',
            body: {email, otp},
            method: "POST"
          }
        }
      })
    };
  },
});
// use+Ten endpoint + mutation or query
export const { useRegisterMutation, useLoginMutation, useVerifyOTPMutation } = rootApi;