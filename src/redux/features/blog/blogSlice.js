import { createSlice } from "@reduxjs/toolkit";

//Redux toolkit store and blog slice.

const initialState = {
  blogs: []
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    allBlogs: (state, action) => {
      state.blogs = action.payload;
    },
  },
});

export const { allBlogs } = blogSlice.actions;

export default blogSlice.reducer;