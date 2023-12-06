import { useState } from "react";
import "./App.scss";
import SportBlock from "./Components/SportBLock";

export default function App() {
  const [sport, setSport] = useState([
    {
      id: 1,
      title: "BETTER CHEMISTRY",
      text: "We're committed to making products in ways that protect consumers, wokers and the environment.",
      image: "./images/sport1.jpeg",
    },
    {
      id: 2,
      title: "BETTER PRACTICES",
      text: "We seek to work with vendors and suppliers who are committed to high standards and continuous improvement.",
      image: "./images/sport2.jpeg",
    },
    {
      id: 3,
      title: "INDUSTRY COLLABORATION",
      text: "We work acioss our industry to implement and scale chemistry standards throughout global supply chains.",
      image: "./images/sport3.jpeg",
    },
  ]);
  return (
    <div className="App">
      <SportBlock sport={sport} />
    </div>
  );
}
