import { configureStore } from '@reduxjs/toolkit';
import { productListReducer, productDetailsReducer } from './productReducers';



export const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
  },
});
