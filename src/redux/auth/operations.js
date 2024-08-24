import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://chat-with-backend.onrender.com/";

// Utility to add JWT
export const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

// /register
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/auth/register", credentials);
      if (res.data.data.accessToken) {
        setAuthHeader(res.data.data.accessToken);
        localStorage.setItem("token", res.data.data.accessToken);
      } else {
        throw new Error("Token not found in response");
      }
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// /login
export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/auth/login", credentials);
      if (res.data.data.accessToken) {
        setAuthHeader(res.data.data.accessToken);
        localStorage.setItem("token", res.data.data.accessToken);
      } else {
        throw new Error("Token not found in response");
      }
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// /logout
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/auth/logout");
    clearAuthHeader();
    localStorage.removeItem("token");
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// /refresh
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const token = localStorage.getItem("token");

    if (token === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(token);
      const res = await axios.post("/auth/refresh");
      if (res.data.data.accessToken) {
        setAuthHeader(res.data.data.accessToken);
        localStorage.setItem("token", res.data.data.accessToken);
      } else {
        throw new Error("Token not found in response");
      }
      return res.data;
    } catch (error) {
      console.error("Refresh error:", error); // Отладочное сообщение
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
