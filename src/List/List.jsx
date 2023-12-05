import React from "react";
import "./List.scss";

export default function List({ list }) {
  return (
    <div className="list">
          {list.map((elem) => {
            return(
        <section key={elem.id} className="List__item">
          <img src={elem.image}/>
          <h2>{elem.name}</h2>
          <p>{elem.desc}</p>
          <button>Read more.</button>
        </section>)
      })}
    </div>
  );
}
