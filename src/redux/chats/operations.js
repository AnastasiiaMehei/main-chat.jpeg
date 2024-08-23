import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuthHeader } from "../auth/operations";
// Fetch chats
export const fetchChats = createAsyncThunk(
  "chats/fetchAll",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (token) {
        setAuthHeader(token);
      }
      const res = await axios.get("/chats");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Add chat
export const addChat = createAsyncThunk(
  "chats/addChat",
  async (chatData, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (token) {
        setAuthHeader(token);
      }
      const res = await axios.post("/chats", chatData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// DELETE @ /chats/:id
export const deleteChat = createAsyncThunk(
  "chats/deleteChat",
  async (chatId, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (token) {
        setAuthHeader(token);
      }
      const response = await axios.delete(`/chats/${chatId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// PATCH// /chats /{chatId}
export const updateChat = createAsyncThunk(
  "chats/updateChat",
  async ({ chatId, updatedData }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (token) {
        setAuthHeader(token);
      }
      const response = await axios.patch(`/chats/${chatId}`, updatedData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
