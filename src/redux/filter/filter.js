import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectAllChats } from "../auth/selectors";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeChatsFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const { changeChatsFilter } = filtersSlice.actions;
export default filtersSlice.reducer;

export const selectChatsFilter = (state) => state.filters?.name ?? "";

export const selectFilteredChats = createSelector(
  [selectAllChats, selectChatsFilter],
  (chats, filter) => {
    if (!filter) return chats;
    return chats.filter(
      (chat) =>
        chat.name && chat.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
