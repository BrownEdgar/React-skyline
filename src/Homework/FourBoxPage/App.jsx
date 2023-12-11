import { useState } from "react";
import "./App.scss";
import TextBox from "./Components/TextBox/TextBox";
import ModalWindow from "./Components/ModalWindow/ModalWindow";

const text =
  "I am alone, and feel the charm of existence in this spot, which was created for the bliss ...";

export default function App() {
  const [textBox, setTextBox] = useState([
    {
      id: 1,
      title: "Process Step One",
      text: text,
      image: "./images/img1.jpg",
    },
    {
      id: 2,
      title: "Process Step Two",
      text: text,
      image: "./images/img2.jpg",
    },
    {
      id: 3,
      title: "Process Step Three",
      text: text,
      image: "./images/img3.jpg",
    },
    {
      id: 4,
      title: "Process Step Four",
      text: text,
      image: "./images/img4.jpg",
    },
  ]);
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const toggleModal = (id = null) => {
    setDeleteId(id);
    setOpen(!open);
  };

  const handleDelete = () => {
    if (deleteId !== null) {
      setTextBox((prevTextBox) => {
        return prevTextBox.filter((elem) => elem.id !== deleteId);
      });
      setOpen(!open);
    }
  };

  return (
    <div className="App">
      <TextBox textBox={textBox} toggleModal={toggleModal} />
      {open ? (
        <ModalWindow toggleModal={toggleModal} handleDelete={handleDelete} />
      ) : null}
    </div>
  );
}
