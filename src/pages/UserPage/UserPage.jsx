import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChats } from "../../redux/chats/operations";
import { selectLoading, selectChats } from "../../redux/chats/selectors";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import ChatEditor from "../../components/ChatEditor/ChatEditor";
import Loader from "../../components/Loader/Loader";
import ChatList from "../../components/ChatList/ChatList";
import UserChat from "../../components/UserChat/UserChat";
import Layout from "../../components/Layout/Layout";
import css from "./UserPage.module.css";

function UserPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const chats = useSelector(selectChats);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [selectedChat, setSelectedChat] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCreatingChat, setIsCreatingChat] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchChats());
    }
  }, [dispatch, isLoggedIn]);

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
    setIsChatOpen(true);
  };

  const handleCreateChat = () => {
    setIsCreatingChat(true);
  };

  const handleChatCreated = () => {
    setIsCreatingChat(false);
    dispatch(fetchChats()); // Refresh the chat list after creating a new chat
  };

  return (
    <Layout>
      <div className={css.container}>
        <div className={css.chatList}>
          {isLoading && <Loader />}
          {chats.length > 0 ? (
            <ChatList onSelectChat={handleSelectChat} />
          ) : (
            <div>
              <p>No chats available. Create a new chat.</p>
              <button onClick={handleCreateChat}>Start new chat</button>
            </div>
          )}
        </div>
        <div className={css.chatEditor}>
          {isLoggedIn ? (
            <>
              {isCreatingChat && (
                <ChatEditor onChatCreated={handleChatCreated} />
              )}
              {selectedChat && (
                <UserChat
                  isOpen={isChatOpen}
                  onRequestClose={() => setIsChatOpen(false)}
                  selectedChat={selectedChat}
                  user={selectedChat}
                />
              )}
            </>
          ) : (
            <p>Please log in to view and send messages.</p>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default UserPage;