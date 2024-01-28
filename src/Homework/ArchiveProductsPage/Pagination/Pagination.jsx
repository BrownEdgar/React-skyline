import React from "react";
import "./Pagination.scss";
import { Link } from "react-router-dom";

export default function Pagination({ pages, total, changePage }) {
  const numbers = [];
  for (let i = 1; i <= Math.ceil(total / pages); i++) {
    numbers.push(i);
  }

  return (
    <>
      <ul className="pagination">
        {numbers.map((el) => (
          <li key={el} onClick={() => changePage(el)}>
            <Link>{el}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
