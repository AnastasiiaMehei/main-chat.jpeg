import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuthHeader } from "../auth/operations";

// GET @ /chats
export const fetchChat = createAsyncThunk(
  "chats/fetchAll",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      console.log("Token in fetchChats:", token);
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
// POST @ /chats
export const addChat = createAsyncThunk(
  "chats/addChat",
  async ({ name }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (token) {
        setAuthHeader(token);
      }
      console.log("Adding chat:", { name });
      const response = await axios.post("/chats", { name });
      console.log("Chat added:", response.data);
      return response.data;
    } catch (e) {
      console.error("Error adding chat:", e.message);
      console.error("Error response data:", e.response.data);
      return thunkAPI.rejectWithValue(e.message);
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
