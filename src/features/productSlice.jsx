import { createSlice } from '@reduxjs/toolkit';

const initialProducts = [
  {
    "id": 1,
    "imageSource": "path/to/image1.jpg",
    "productName": "Product A",
    "brand": "Brand A",
    "price": 19.99,
    "quantity": 3,
    "total": 59.97,
    "status": ""
  },
  {
    "id": 2,
    "imageSource": "path/to/image2.jpg",
    "productName": "Product B",
    "brand": "Brand B",
    "price": 29.99,
    "quantity": 2,
    "total": 59.98,
    "status": ""
  },
  {
    "id": 3,
    "imageSource": "path/to/image3.jpg",
    "productName": "Product C",
    "brand": "Brand C",
    "price": 39.99,
    "quantity": 5,
    "total": 199.95,
    "status": ""
  },
  {
    "id": 4,
    "imageSource": "path/to/image4.jpg",
    "productName": "Product D",
    "brand": "Brand D",
    "price": 49.99,
    "quantity": 1,
    "total": 49.99,
    "status": ""
  },
  {
    "id": 5,
    "imageSource": "path/to/image5.jpg",
    "productName": "Product E",
    "brand": "Brand E",
    "price": 59.99,
    "quantity": 4,
    "total": 239.96,
    "status": ""
  }
];

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: initialProducts,
  },
  reducers: {
    approveProduct: (state, action) => {
      const { productId } = action.payload;
      const product = state.products.find((p) => p.id === productId);
      if (product) {
        product.status = 'Approved';
      }
    },
    markProductUrgent: (state, action) => {
      const { productId } = action.payload;
      const product = state.products.find((p) => p.id === productId);
      if (product) {
        
        product.status = 'Missing-Urgent';
      } else {
        // Handle the case where the product is not found
        console.error(`Product with id ${productId} not found`);
      }
    },
    markProductMissing: (state, action) => {
      const { productId } = action.payload;
      const product = state.products.find((p) => p.id === productId);
      if (product) {

        product.status = 'Missing';
      } else {
        // Handle the case where the product is not found
        console.error(`Product with id ${productId} not found`);
      }
    },
  },
});

export const { approveProduct, markProductUrgent, markProductMissing} = productSlice.actions;
export const selectProducts = (state) => state.products.products;
export default productSlice.reducer;
