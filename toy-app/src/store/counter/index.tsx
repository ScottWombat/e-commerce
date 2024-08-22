import { createSlice } from '@reduxjs/toolkit';

import { RootState } from 'src/store';

const initialState = {
    count: 0
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state, action) => {
       state.count += 1;
    },
    decrease: (state, action) => {
       state.count -= 1;
    },
    reset: (state,action) => {
      state.count = 0;
    },
    
 }
})

//selector
export const selectCount= (state:RootState) => state.counter.count;

//actions
export const { increase,decrease,reset } = counterSlice.actions;

//reducer
export default counterSlice.reducer;