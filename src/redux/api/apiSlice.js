import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authMiddleware } from "../../utils/authMiddleware";


//This is Redux toolkit api slice were creating api endpoints for getting data  from Backend

export const api = createApi({
  reducerPath: "api",
  baseQuery: authMiddleware(
    fetchBaseQuery({ baseUrl: "https://aetherllane-server.vercel.app" })
  ),

  tagTypes: ["Blog"],

  endpoints: (builder) => ({

    //get single post
    singleBlog: builder.query({
      query: (id) => ({
        url: `/blog/${id}`,
      }),
    }),

    //create a blog
    createBlog: builder.mutation({
      query: (newBlog) => ({
        url: "/blogs",
        method: "POST",
        body: newBlog,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Blog"],
    }),

    //delete a blog
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blog"],
    }),

    //update a blog
    updateBlog: builder.mutation({
      query: ({ id, newBlog }) => ({
        url: `/blog/${id}`,
        method: "PATCH",
        body: JSON.stringify(newBlog),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Blog"],
    }),

    //get all blogs
    getBlogs: builder.query({
      query: () => ({
        url: "/blogs",
      }),
      providesTags: ["Blog"],
    }),

    //auth
    adminLogin: builder.mutation({
      query: ({ adminId, password }) => ({
        url: "/login",
        method: "POST",
        body: JSON.stringify({ adminId, password }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),

    //auth protection layer
    validToken: builder.mutation({
      query: () => ({
        url: "/auth-validation",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useSingleBlogQuery,
  useCreateBlogMutation,
  useDeleteBlogMutation,
  useGetBlogsQuery,
  useUpdateBlogMutation,
  useAdminLoginMutation,
  useValidTokenMutation,
} = api;
