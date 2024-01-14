import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";

export default function Home() {
  const [first, setfirst] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/products").then((res) =>
      console.log(res.data)
    );
  }, []);

  return (
    <div className="Home">
      <h1>Welcome</h1>
      <h2>Welcome to Our JSON-Powered Website!</h2>
      <p>
        Take a moment to explore our content. Thank you for visiting. Enjoy your
        stay!
      </p>
    </div>
  );
}
