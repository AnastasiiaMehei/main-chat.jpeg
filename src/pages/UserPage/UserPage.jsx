import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";
import { fetchChats } from "../../redux/chats/operations";
import { selectLoading } from "../../redux/chats/selectors";
import ChatEditor from "../../components/ChatEditor/ChatEditor";
import Loader from "../../components/Loader/Loader";
import ChatList from "../../components/ChatList/ChatList";
function UserPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);

  return (
    <>
      <PageTitle>Your chats</PageTitle>
      <ChatEditor />
      <div>{isLoading && <Loader />}</div>
      <ChatList />
    </>
  );
}

export default UserPage;
