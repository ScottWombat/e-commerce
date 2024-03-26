import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import cartReducer from './cart/cartReducer';
export const store = configureStore({
    reducer:{ 
        authreducer:authReducer,
        cart:cartReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;