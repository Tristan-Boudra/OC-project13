import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/**
 * User API for authentication and profile management.
 * @type{Object}
 */
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/v1" }),
  endpoints: (builder) => ({
    /**
     * Mutation for user authentication.
     * @function login
     */
    login: builder.mutation({
      query: (body) => ({
        url: "/user/login",
        method: "POST",
        body,
      }),
    }),
    /**
     * Mutation to retrieve user profile.
     * @function getUserProfile
     */
    getUserProfile: builder.mutation({
      query: (token) => {
        return {
          url: "/user/profile",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    /**
     * Mutation to update user profile.
     * @function updateUserProfile
     */
    updateUserProfile: builder.mutation({
      query: ({ body, token }) => {
        return {
          url: "/user/profile",
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body,
        };
      },
    }),
  }),
});

/**
 * Custom hooks to use mutations defined in the API.
 * @type{Object}
 */
export const {
  useLoginMutation,
  useGetUserProfileMutation,
  useUpdateUserProfileMutation,
} = apiSlice;
