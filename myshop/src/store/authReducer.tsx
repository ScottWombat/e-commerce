import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import * as Constants from 'src/constants'
import UserRepository , {IUser,IError} from 'src/repositories/user-repository';
import ApiResponse from 'src/repositories/api-response';
import axios from 'axios';
const TOKEN_URL = Constants.API_BASE_URL + '/users/token';


type AuthState = {
    user: IUser | null,
    isLoggedIn: boolean | false,
    status: string | null,
    error: any | null
}




export const fetchToken1 = createAsyncThunk(
  'auth/fetchToken',
  async () => {
    const response = await axios.post(TOKEN_URL,{}).then(function (response) {
        console.log("d:" +response);
        //return response;
      })
      .catch(function (error) {
        console.log(error);
      });
    return response;
  }
);

export const fetchToken = createAsyncThunk(
  'auth/fetchToken',
  async () => {
    const repository: UserRepository = new UserRepository();
    const form = new FormData();
    form.append('username','johndoe');
    form.append('password','secret');
 
    var response:ApiResponse<IUser> =await repository.post(form);
   
    return response;
    
  }
);

const initialState:AuthState={
  user: null,
  isLoggedIn: false,
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
            state.isLoggedIn = true;
            let response1:ApiResponse<IUser> =action.payload;
           
            let data:IUser|undefined = response1.data 
            if(data !==undefined){
              console.log(data.username)
              state.user = data
            }
            
          })
          .addCase(fetchToken.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
            console.log("failed")
          });

        },
});
const { actions, reducer } = authSlice
export default authSlice.reducer;