import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { createSelector } from 'reselect'
import properties from 'src/utils/properties'

//const URL = 'http://localhost:5000/api/product/products_by_category?category=Cock Rings&page_no=3&page_size=20'

export const retrieveProducts = createAsyncThunk(
  'products/retrieveProducts', async (arg: any,thunkAPI: any) => {
 
    let url  = `${properties.api_url}/products/products_by_category/?category=${arg.category}&page_no=0&page_size=20`
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
    total: 0,
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
              state.items = action.payload;
              state.total = state.items.length;
              state.status = 'success';
              state.category = action.meta.arg;
          })
          .addCase(retrieveProducts.rejected, (state, action) => {
              state.status = 'failed';
              state.items = [];
          })
    }
})

const { actions, reducer } = productsSlice;
// selector
export const total = (state) => state.products.total;

export default productsSlice.reducer;