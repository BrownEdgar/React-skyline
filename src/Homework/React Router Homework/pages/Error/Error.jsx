import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFaceSadTear } from "react-icons/fa6";
import "./Error.scss";

export default function Error() {
  //
  // const nav = useNavigate();

  // const goBack = () => {
  //   nav(-1);
  // };

  return (
    <div className="Error">
      <h1>
        404 - Page Not Found <FaFaceSadTear />
      </h1>
      <p>Oops! It looks like the page you're looking for doesn't exist.</p>
      <p>Please check the URL or go back to the home page.</p>

      {/* <button onClick={goBack}>Go back</button>
      <Link to="/">Home</Link> */}
    </div>
  );
}
