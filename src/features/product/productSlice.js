import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const GetProductAll = import.meta.env.VITE_GET_PRODUCT;

// Initial state
const initialState = {
  products: [],
  status: "idle", // idle | loading | succeeded | failed
  error: null,
};

// Thunk for fetching products from Fake Store API
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts", // action type
  async () => {
    const response = await axios.get(GetProductAll);
    // console.log(response.data);
    return response.data; // return data as the payload
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (category) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    console.log(response.data);
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload; // set the fetched products
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload; // set the fetched products
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.status = "loading";
      });
  },
});

export default productsSlice.reducer;
