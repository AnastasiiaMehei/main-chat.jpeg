import React from "react";
import "./MessageTime.css";

const MessageTime = ({ message }) => {
  const formattedDate = new Date(message.timestamp).toLocaleString();

  return (
    <div className={`message ${message.sender}`}>
      <p>{message.text}</p>
      <small>{formattedDate}</small>
    </div>
  );
};

export default MessageTime;
