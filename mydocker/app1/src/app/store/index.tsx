import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter'
import cartReducer from './cart/cartReducer';
const rootReducer = combineReducers({
    counter: counterReducer,
    cart:cartReducer,
})
export const store = configureStore({
    reducer: rootReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

//export default store;