import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'src/store';
export const getUserCode = createAsyncThunk(
  'userCode/getUserCode',
  //async (args, { dispatch, getState }) => {
  async (args, {dispatch, getState, rejectWithValue, fulfillWithValue}) => {
    //thunkApi: { dispatch, getState }
    //getState gives us access to "all" the state in the store
    //we can use the dispatch to 'dispatch' another action
    // const { posts } = getState();
    // console.log(posts);
    //console.log("DDDD1")
    //const res = await fetch(`http://localhost:5000/api/users/security_code`).then(
    //  (data) => res.json());
    //console.log("DDDD")
    //return res;
    try{
      const response = await fetch('http://localhost:5000/api/users/security_code');
      if (!response.ok) {
          return rejectWithValue(response.status)
      }
      const data = await response.json();
      return fulfillWithValue(data)
  }catch(error){
      throw rejectWithValue(error)
  }
  }
);

const userCodeSlice = createSlice({
  name: 'userCode',
  initialState: {
    code: '',
    status: null,
    msg: null
  },
  reducers: {
  },
  extraReducers: (builder) =>{
    builder
        .addCase(getUserCode.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(getUserCode.fulfilled, (state,action) => {
            state.code = action.payload;
            state.status = 'success';
        })
        .addCase(getUserCode.rejected, (state, action) => {
            state.status = 'failed';
            state.msg = action.payload;
        })
  }
});

const { actions, reducer } = userCodeSlice;
export default userCodeSlice.reducer;


export const selectUserCode = (state: RootState) => state.userCode.code;