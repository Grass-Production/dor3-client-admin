import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/redux/slice/counterSlice';
import toastReducer from '@/redux/slice/toastSlice';
import checkLoginReducer from '@/redux/slice/checkLoginSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    toast: toastReducer,
    checkLogin: checkLoginReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
