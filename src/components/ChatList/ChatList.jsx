// ChatList.jsx
import React from "react";
import { useSelector } from "react-redux";
import Chat from "../Chat/Chat";
import { selectFilteredChats } from "../../redux/filter/filter";
import css from "./ChatList.module.css";

function ChatList({ onSelectChat, isAuthenticated }) {
  const chats = useSelector(selectFilteredChats);

  if (!isAuthenticated) {
    return <p className={css.message}>Please log in to see the chats.</p>;
  }

  return (
    <div className={css.chatList}>
      <p className={css.title}>Chats</p>
      <ul className={css.list}>
        {chats.map((chat) => (
          <li
            key={chat.id}
            className={css.listItem}
            onClick={() => onSelectChat(chat)}
          >
            <Chat id={chat.id} chat={chat} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatList;
