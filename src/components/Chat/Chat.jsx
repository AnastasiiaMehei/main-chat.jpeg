// src/components/Chat/Chat.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteChat, updateChat } from "../../redux/chats/operations";
import { IoPerson } from "react-icons/io5";
import { FaTrashCan } from "react-icons/fa6";
import { GrEdit } from "react-icons/gr";
import { Toaster, toast } from "react-hot-toast";
import Modal from "../Modal/Modal";
import css from "./Chat.module.css";

function Chat({ id, chat }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedChat, setEditedChat] = useState(chat);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal(true);
  };

  const confirmDelete = () => {
    dispatch(deleteChat(id))
      .then(() => {
        toast.success("Chat deleted successfully!");
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Failed to delete chat:", error);
        toast.error("Failed to delete chat.");
      });
  };

  const cancelDelete = () => {
    setShowModal(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedChat((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateChat({ chatId: id, updatedData: editedChat }))
      .then(() => {
        toast.success("Chat updated successfully");
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Failed to update chat:", error);
        toast.error("Failed to update chat.");
      });
  };

  if (showModal) {
    return (
      <Modal isOpen={showModal} onClose={cancelDelete}>
        <h2>Confirm action</h2>
        <p>Are you sure you want to delete this chat?</p>
        <button onClick={confirmDelete}>Yes, delete</button>
        <button onClick={cancelDelete}>Cancel</button>
      </Modal>
    );
  }

  if (isEditing) {
    return (
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={editedChat.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          name="surname"
          value={editedChat.surname}
          onChange={handleChange}
          placeholder="Surname"
        />
        <input
          name="photo"
          value={editedChat.photo}
          onChange={handleChange}
          placeholder="Photo URL"
        />
        <input
          name="lastMessageDate"
          value={editedChat.lastMessageDate}
          onChange={handleChange}
          placeholder="Last Message Date"
        />
        <button type="submit">Save</button>
      </form>
    );
  }

  return (
    <>
      <Toaster />
      <div className={css.container}>
        <div className={css.paragraphDiv}>
          <img
            src={editedChat.photo}
            alt={`${editedChat.name} ${editedChat.surname}`}
            className={css.photo}
          />
          <div className={css.textContainer}>
            <p className={css.paragraph}>
              <IoPerson className={css.icon} /> {editedChat.name}{" "}
              {editedChat.surname}
            </p>
            <p className={css.lastMessage}>{editedChat.lastMessage}</p>
          </div>
          <p className={css.date}>{editedChat.lastMessageDate}</p>
        </div>
        <div className={css.btnDiv}>
          <button className={css.btn} onClick={handleDelete}>
            <FaTrashCan />
          </button>
          <button className={css.btn} onClick={handleEdit}>
            <GrEdit />
          </button>
        </div>
      </div>
    </>
  );
}

export default Chat;
