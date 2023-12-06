import { useState } from "react";
import List from "./List/List";
import './App.scss'

export default function App() {
  const [sport, setSport] = useState([
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1580692475446-c2fabbbbf835?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "BETTER CHEMISTRY",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugiat, voluptatem officia vel nisi ea?",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwb3J0fGVufDB8MXwwfHx8MA%3D%3D",
      name: "BETTER PRACTICE",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugiat, voluptatem officia vel nisi ea?",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNwb3J0fGVufDB8MXwwfHx8MA%3D%3D",
      name: "INDUSTRY COLLABORATION",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugiat, voluptatem officia vel nisi ea?",
    },
  ]);
  return (
      <List list={sport} />
  );
}
