import { configureStore } from '@reduxjs/toolkit';
import { productListReducer } from './productReducers';


export const store = configureStore({
  reducer: {
    productList: productListReducer,
  },
});
