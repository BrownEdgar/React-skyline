import "./TextBox.scss";
import PropTypes from "prop-types";

export default function TextBox({ textBox }) {
  return (
    <div className="TextBox">
      {textBox.map((el) => {
        return (
          <article key={el.id} className="TextBox__item ">
            <img src={el.image} alt={el.title} />
            <div>
              <h2>{el.title}</h2>
              <p>{el.text}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

TextBox.propTypes = {
  textBox: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      title: PropTypes.string,
      text: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};
