import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect'

const initialState = {
  isMember: true,
  email:''
}

const memberSlice = createSlice({
    name: 'member',
    initialState,
    reducers: {
      setMember: (state, action) => {
        state.isMember = action.payload.isMember;
        state.email = action.payload.email;
      },
    
    },
})
export const { setMember } = memberSlice.actions;

export const isMember = (state) => state.member.isMember;
export const email = (state) => state.member.email;

export default memberSlice.reducer;