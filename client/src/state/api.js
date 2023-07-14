import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  reducerPath: "dashboardApi",
  tagTypes: ["Login", "GetNotification", "PostNotification"],
  endpoints: (build) => ({
    getUser: build.mutation({
      query: ({ username, password, role }) => ({
        url: "user/login",
        method: "POST",
        body: { username, password, role },
      }),
      invalidatesTags: ["Login"],
    }),
    getNotification: build.query({
      query: () => "user/notification",
      providesTags: ["GetNotification"],
    }),
    postNotification: build.mutation({
      query: ({ title, description }) => ({
        url: "admin/notification",
        method: "POST",
        body: { title, description },
      }),
      invalidatesTags: ["PostNotification"],
    }),
  }),
});

export const {
  useGetUserMutation,
  useGetNotificationQuery,
  usePostNotificationMutation,
} = api;
