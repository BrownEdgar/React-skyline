import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Error() {
  const nav = useNavigate();

  const goBack = () => {
    nav(-1);
  };
  return (
    <div>
      <h1>Error page not found :(</h1>
      <button onClick={goBack}>Go back</button>
      <Link to="/">Home</Link>
    </div>
  );
}
