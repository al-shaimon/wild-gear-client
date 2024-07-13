import { baseApi } from '@/redux/api/baseApi';
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '@/redux/features/productsSlice';
import cartReducer from '@/redux/features/cartSlice';

export const store = configureStore({
  // Add all reducers here
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    products: productsReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
