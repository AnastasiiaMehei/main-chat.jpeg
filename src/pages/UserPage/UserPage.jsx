// src/pages/UserPage/UserPage.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChats } from "../../redux/chats/operations";
import { selectLoading } from "../../redux/chats/selectors";
import ChatEditor from "../../components/ChatEditor/ChatEditor";
import Loader from "../../components/Loader/Loader";
import ChatList from "../../components/ChatList/ChatList";
import UserChat from "../../components/UserChat/UserChat";
import Layout from "../../components/Layout/Layout";
import css from "./UserPage.module.css";

function UserPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const [selectedChat, setSelectedChat] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
    setIsChatOpen(true);
  };

  return (
    <Layout>
      <div className={css.container}>
        <div className={css.chatList}>
          {isLoading && <Loader />}
          <ChatList onSelectChat={handleSelectChat} />
        </div>
        <div className={css.chatEditor}>
          <UserChat
            isOpen={isChatOpen}
            onRequestClose={() => setIsChatOpen(false)}
            selectedChat={selectedChat}
            user={selectedChat}
          />
        </div>
      </div>
    </Layout>
  );
}

export default UserPage;
