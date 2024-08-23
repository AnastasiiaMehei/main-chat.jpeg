import React, { useState, useEffect } from "react";
import { IoMdSend } from "react-icons/io";
import axios from "axios";
import css from "./UserChat.module.css";

const UserChat = ({ isOpen, onRequestClose, selectedChat, user }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setMessages([]);
      setInput("");
    }
  }, [isOpen]);

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = {
        sender: "user",
        text: input,
        timestamp: Date.now(),
      };
      setMessages([...messages, newMessage]);
      setInput("");

      // Simulate a response from the other party
      setTimeout(async () => {
        try {
          const response = await axios.get("https://api.quotable.io/random");
          const quote = response.data.content;
          const responseMessage = {
            sender: "other",
            text: quote,
            timestamp: Date.now(),
          };
          setMessages((prevMessages) => [...prevMessages, responseMessage]);
        } catch (error) {
          console.error("Failed to fetch quote:", error);
        }
      }, 3000);
    }
  };

  return (
    <div className={`${css.userChat} ${isOpen ? css.open : css.closed}`}>
      <div className={css.userChatHeader}>
        {user ? (
          <>
            <img
              src={user.photo}
              alt={`${user.firstName} ${user.lastName}`}
              className={css.userPhoto}
            />
            <div className={css.userInfo}>
              <p>{user.firstName}</p>
              <p>{user.lastName}</p>
            </div>
          </>
        ) : (
          <p>No user selected</p>
        )}
      </div>
      <div className={css.userChatFooter}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message"
          className={css.input}
        />
        <button onClick={handleSendMessage} className={css.sendButton}>
          <IoMdSend />
        </button>
      </div>
    </div>
  );
};

export default UserChat;
