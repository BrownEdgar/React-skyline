import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Errorpage() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>404 | page not found :</h1>
      <button onClick={goHome}>go home</button>
      <Link to={"/"}>go home</Link>
    </div>
  );
}
