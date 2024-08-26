import { createSlice } from "@reduxjs/toolkit";
import { fetchChats, addChat, deleteChat, updateChat } from "./operations";
import { logOut } from "../auth/operations";

const chatsSlice = createSlice({
  name: "chats",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchChats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        console.log("Chats state updated:", state.items); // Add this line
      })
      .addCase(fetchChats.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.error("Error updating chats state:", action.payload); // Add this line
      })
      .addCase(addChat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addChat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addChat.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteChat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteChat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (task) => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteChat.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateChat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateChat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (chat) => chat.id === action.meta.arg.chatId
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateChat.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default chatsSlice.reducer;
