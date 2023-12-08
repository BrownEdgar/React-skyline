import { useState } from "react";
import "./App.scss";
import TextBox from "./Components/TextBox";

const text =
  "I am alone, and feel the charm of existence in this spot, which was created for the bliss ...";
export default function App() {
  const [textBox] = useState([
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
      image: "./images/sport1.jpg",
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
  return (
    <div className="App">
      <TextBox textBox={textBox} />
    </div>
  );
}
