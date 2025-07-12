import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Creating Types
// export type RootState = ReturnType<typeof store.getState> // Infer the `RootState` and `AppDispatch` types from the store itself
// export type AppDispatch = typeof store.dispatch // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
