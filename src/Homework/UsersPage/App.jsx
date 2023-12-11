import { useState, useEffect } from "react";
import "./App.scss";
import UserBox from "./Components/UserBox/UserBox";
import ModalWindow from "./Components/ModalWindow/ModalWindow";
import axios from "axios";

export default function App() {
  const [userBox, setUserBox] = useState([]);
  const [copyUserBox, setCopyUserBox] = useState([]);
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [sort, setSort] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      const users = res.data.map(({ id, name, username, email }) => ({
        id,
        name,
        username,
        email,
        image: `./images/Users/user_${id}.jpg`,
      }));
      setUserBox(users);
      setCopyUserBox(users);
    });
  }, []);
  const toggleModal = (id = null) => {
    setDeleteId(id);
    setOpen(!open);
  };

  const handleDelete = () => {
    if (deleteId !== null) {
      setUserBox((prevTextBox) => {
        return prevTextBox.filter((elem) => elem.id !== deleteId);
      });
      setOpen(!open);
    }
  };
  const sortUsers = () => {
    setUserBox((prevUsers) => {
      return sort
        ? prevUsers.toSorted((a, b) => (a.name > b.name ? 1 : -1))
        : prevUsers.toSorted((a, b) => (a.name > b.name ? -1 : 1));
    });
    setSort(!sort);
  };
  const reset = () => {
    setUserBox(copyUserBox);
    setSort(null);
  };

  return (
    <div className="App">
      <UserBox
        userBox={userBox}
        toggleModal={toggleModal}
        sortUsers={sortUsers}
        reset={reset}
      />
      {open ? (
        <ModalWindow toggleModal={toggleModal} handleDelete={handleDelete} />
      ) : null}
    </div>
  );
}
