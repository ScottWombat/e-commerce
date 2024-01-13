import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import axios from 'axios';
const TOKEN_URL = 'http://localhost:5000/users/token';

interface User{
    email: string,
    name: string
}
type AuthState = {
    user: User | null,
    token: string | null,
    status: string | null,
    error: any | null
}




export const fetchToken = createAsyncThunk(
  'token/fetchToken',
  async () => {
    const response = await axios.post(TOKEN_URL,{}).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
  }
);

const initialState:AuthState={
  user: null,
  token: null,
  status: 'idle',
  error: null,
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchToken.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchToken.fulfilled, (state,action) => {
            state.status = 'succeeded';
            //state.token = action.payload;
          })
          .addCase(fetchToken.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });

        },
});
const { actions, reducer } = authSlice
export default authSlice.reducer;