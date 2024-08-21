import { useSelector } from "react-redux";
import Chat from "../Chat/Chat";
import { selectFilteredChats } from "../../redux/filter/filter";

function Chats() {
  const chats = useSelector(selectFilteredChats);

  return (
    <>
      <div>
        <p>Chats</p>
        <ul>
          {chats.map((chat) => (
            <li key={chat.id}>
              <Chat name={chat.name} surname={chat.surname} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Chats;
