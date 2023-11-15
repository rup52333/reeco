// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/productSlice.jsx';

export const store = configureStore({
  reducer: {
    products: productReducer,
    // Add other reducers if needed
  },
});
