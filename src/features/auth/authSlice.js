import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk for handling user login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      });
      return response.data; // Contains the token if login is successful
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Initial state for auth slice
const initialState = {
  token: null, // Store the token after login
  isLoggedIn: false, // Track login status
  status: "idle", // idle | loading | succeeded | failed
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isLoggedIn = false;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.token; // Store the token from the login response
        state.isLoggedIn = true; // Set user as logged in
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.isLoggedIn = false;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
