import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'src/store';
import UserData from 'src/types/user_data';

const URL = 'http://localhost:5000/api/users/create_user'

export const userRegister = createAsyncThunk(
    'signup/register', async (userData: UserData, thunkAPI) => {
      console.log("LLLL")
      console.log(JSON.stringify(userData))
      try{
        const response = await fetch(URL,{
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }
        });
        if (!response.ok) {
            return thunkAPI.rejectWithValue(response.status)
        }
        const data = await response.json();
        return thunkAPI.fulfillWithValue(data)
    }catch(error){
        throw thunkAPI.rejectWithValue(error)

        
    }
    }
  );

const signupSlice = createSlice({
    name: 'signup',
    initialState: {
      userInfo:{},
      status: ''
    },
    reducers: {
    },
    extraReducers: (builder) =>{
      builder
          .addCase(userRegister.pending, (state) => {
              state.status = 'loading';
          })
          .addCase(userRegister.fulfilled, (state,action) => {
              state.userInfo = action.payload;
              state.status = 'success';
          })
          .addCase(userRegister.rejected, (state, action) => {
              state.status = 'failed';
              state.userInfo = action.payload;
          })
    }
  });
  
  const { actions, reducer } = signupSlice;
  export default signupSlice.reducer;