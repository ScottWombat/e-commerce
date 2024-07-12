import { createSlice, createSelector,createAsyncThunk} from '@reduxjs/toolkit';
//import { createSelector } from 'reselect'
import properties from 'src/utils/properties'

//const URL = 'http://localhost:5000/api/product/products_by_category?category=Cock Rings&page_no=3&page_size=20'

export const retrieveProducts = createAsyncThunk(
  'products/retrieveProducts', async (arg: any,thunkAPI: any) => {
 
    let url  = `${properties.api_url}/products/products_by_category/?category=${arg.category}&page_no=0&page_size=${arg.page_no}`
    try{
      const response = await fetch(url);
      console.log("Trunck")
      console.log(response)
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

const initialState = {
    items: [],
    totalRecords:0,
    totalItems: 0,
    viewItems:0,
    progressBar:0,
    pageNo:0,
    totalPages:0,
    pageSize:0,
    status: null,
    category: null
  }
export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
      builder
          .addCase(retrieveProducts.pending, (state) => {
              state.status = 'loading';
          })
          .addCase(retrieveProducts.fulfilled, (state,action) => {
              state.items = action.payload.data;
              state.totalRecords = action.payload.total_records;
              state.totalItems = action.payload.total_items;
              state.viewItems = action.payload.view_items;
              state.pageSize = action.payload.page_size;
              state.totalPages = action.payload.total_pages;
              state.progressBar = action.payload.progress_bar;
              state.status = 'success';
              state.pageNo = action.meta.arg.page_no;
              state.category = action.meta.arg.category;
          })
          .addCase(retrieveProducts.rejected, (state, action) => {
              state.status = 'failed';
              state.items = [];
          })
    }
})

const { actions, reducer } = productsSlice;
//store selector
export const selectAllItems = (state) => state.products.items;
export const total = (state) => state.products.total;

export const selectProductById = createSelector(
    [selectAllItems, (state, id) => id], 
    (items,id) => items.find(item => item.id === id)
  );

export default productsSlice.reducer;