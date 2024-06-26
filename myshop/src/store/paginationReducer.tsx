import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect'

const initialState = {
  amount_page: 20,
  load_more: false,
  total_records: 0,
  remaining_records: 0
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
      updateTotalRecords: (state, action) => {
        state.total_records = action.payload.total_records
        state.remaining_records = state.total_records -state.amount_page
        state.load_more = state.remaining_records < 1?false:true
      }
    
    },
})
export const { updateTotalRecords } = paginationSlice.actions;

export const loadMore = (state) => state.pagination.load_more;


export default paginationSlice.reducer;