import React from "react";
import "./Pagination.scss";

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
            <a href="#">{el}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
