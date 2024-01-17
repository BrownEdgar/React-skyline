import React from 'react'
import "./Home.scss"
import { SiJordan } from "react-icons/si";
import { SiNike } from "react-icons/si";
import { PiSneakerMoveFill } from "react-icons/pi";
export default function Home() {
  return (
    <div className="container">
      <h1>Welcom to Fan-Nike Shop</h1>
      <h2>Made By Artyom</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
        consequuntur nostrum molestias veritatis debitis totam, ad eaque in
        repellat! Ipsum harum molestias minima rem aliquam voluptatem veniam,
        eveniet explicabo quaerat?
      </p>
      <div className="icon-container">
        <SiJordan className="icon " />
        <SiNike className="icon " />
      </div>
    </div>
  );
}
