import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect'

const initialState = {
  rows_per_page: 20,
  load_more: true,
  total_records: 0,
  remaining_records: 0,
  start:0,
  end:19
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
      updatePagination: (state, action) => {
        state.total_records = action.payload.products_total
        state.start = state.start + state.rows_per_page
        state.end = state.end + state.rows_per_page
        //state.remaining_records = state.total_records -state.rows_per_page
        //state.load_more = state.remaining_records < 1?false:true
      }
    
    },
})
export const { updatePagination } = paginationSlice.actions;

export const loadMore = (state) => state.pagination.load_more;


export default paginationSlice.reducer;