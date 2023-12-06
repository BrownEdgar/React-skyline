import "./SportBlock.scss";

export default function SportBlock({ sport }) {
  return (
    <div className="SportBlock">
      {sport.map((el) => {
        return (
          <article key={el.id} className="SportBlock__item ">
            <img src={el.image} alt={el.title} />
            <div>
              <h2>{el.title}</h2>
              <p>{el.text}</p>
              <button>Read more.</button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
