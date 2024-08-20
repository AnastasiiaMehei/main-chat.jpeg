import { createSelectorHook } from "react-redux";
import { selectAllChats } from "../auth/selectors";
export const selectChatsFilter = (state) => state.filters?.name ?? "";

export const selectFilteredChats = createSelectorHook(
  [selectAllChats, selectChatsFilter],
  (chats, filter) => {
    if (!filter) return chats;
    return chats.filter(
      (chat) =>
        (chat.name && chat.name.toLowerCase().includes(filter.toLowerCase())) ||
        chat.number.includes(filter)
    );
  }
);
