import { createSlice, createSelector,createAsyncThunk} from '@reduxjs/toolkit';
//import { createSelector } from 'reselect'
import properties from 'src/utils/properties'

//const URL = 'http://localhost:5000/api/product/products_by_category?category=Cock Rings&page_no=3&page_size=20'

export const retrieveProducts = createAsyncThunk(
  'products/retrieveProducts', async (arg: any,thunkAPI: any) => {
    let params = `catalogue=${arg.catalogue}&category=${arg.category}&per_page=${arg.per_page}&page_no=${arg.page_no}`
    let url  = `${properties.api_url}/products/products_by_catalogue_category/?${params}`
    console.log(url)
    try{
      const response = await fetch(url);
    
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
    info: {},
    status: ''
    //totalRecords:0,
    //totalItems: 0,
    //viewItems:0,
    //progressBar:0,
    //pageNo:0,
    //totalPages:0,
    //pageSize:0,
    //status: null,
    //category: null
  }
export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      addProducts(state,action){
        //state.items = [...state.items, action.payload]
        state.items = action.payload
      },
    },
    extraReducers: (builder) =>{
      builder
          .addCase(retrieveProducts.pending, (state) => {
              state.status = 'loading';
          })
          .addCase(retrieveProducts.fulfilled, (state,action) => {
              state.items = action.payload.data;
              state.status = 'success';
              state.info ={'totalRecords': action.payload.total_records,
                           'totalItems': action.payload.total_items,
                           'viewItems': action.payload.view_items,
                           'pageSize': action.payload.page_size,
                           'totalPages': action.payload.total_pages,
                           'progressBar': action.payload.progress_bar,
                           'pageNo': action.meta.arg.page_no,
                           'category': action.meta.arg.category,
                           'catalogue': action.meta.arg.catalogue
                          }

              //state.totalRecords = action.payload.total_records;
              //state.totalItems = action.payload.total_items;
              //state.viewItems = action.payload.view_items;
              //state.pageSize = action.payload.page_size;
              //state.totalPages = action.payload.total_pages;
              //state.progressBar = action.payload.progress_bar;
              //state.status = 'success';
              //state.pageNo = action.meta.arg.page_no;
              //state.category = action.meta.arg.category;
          })
          .addCase(retrieveProducts.rejected, (state, action) => {
              state.status = 'failed';
              state.items = [];
              state.info={};
          })
    }
})

const { actions, reducer } = productsSlice;
export const { addProducts } = productsSlice.actions;
//store selector
export const selectAllItems = (state) => state.products.items;
export const selectProductsInfo = (state) => state.products.info;
export const selectRetriveProductStatus = (state) => state.products.status;
//export const total = (state) => state.products.total;

export const selectProductById = createSelector(
    [selectAllItems, (state, id) => id], 
    (items,id) => items.find(item => item.id === id)
  );

export default productsSlice.reducer;