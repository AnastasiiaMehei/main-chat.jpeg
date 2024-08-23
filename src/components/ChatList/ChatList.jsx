import React from "react";
import { useSelector } from "react-redux";
import Chat from "../Chat/Chat";
import { selectChats } from "../../redux/chats/selectors";
import css from "./ChatList.module.css";

function ChatList({ onSelectChat }) {
  const chats = useSelector(selectChats);

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