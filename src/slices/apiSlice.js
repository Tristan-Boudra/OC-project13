import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/**
 * Module d'API pour gérer les requêtes liées à l'utilisateur.
 * @module apiSlice
 */

/**
 * API utilisateur pour la gestion de l'authentification et du profil.
 * @type {Object}
 */
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/v1" }),
  endpoints: (builder) => ({
    /**
     * Mutation pour l'authentification de l'utilisateur.
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
     * Mutation pour récupérer le profil de l'utilisateur.
     * @function getUserProfile
     */
    getUserProfile: builder.mutation({
      query: () => ({
        url: "/user/profile",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),
    /**
     * Mutation pour mettre à jour le profil de l'utilisateur.
     * @function updateUserProfile
     */
    updateUserProfile: builder.mutation({
      query: (body) => ({
        url: "/user/profile",
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body,
      }),
    }),
  }),
});

/**
 * Hooks personnalisés pour utiliser les mutations définies dans l'API.
 * @type {Object}
 */
export const {
  useLoginMutation,
  useGetUserProfileMutation,
  useUpdateUserProfileMutation,
} = apiSlice;
