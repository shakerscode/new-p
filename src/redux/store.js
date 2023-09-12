import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';
import blogReducer from './features/blog/blogSlice';

//Redux Toolkit Store 

const store = configureStore({
  reducer: {
    blog: blogReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export default store;
