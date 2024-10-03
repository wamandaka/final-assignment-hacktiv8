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
    return response.data; // return data as the payload
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
      });
  },
});

export default productsSlice.reducer;
