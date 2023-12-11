import "./UserBox.scss";
import PropTypes from "prop-types";

export default function UserBox({ userBox, toggleModal, sortUsers, reset }) {
  return (
    <div className="UserBox">
      <button onClick={sortUsers}>Sort Users</button>
      <button onClick={reset}>Reset Order</button>
      <div className="UserBox__container">
        {userBox.map((el) => (
          <article key={el.id} className="UserBox__item">
            <span onClick={() => toggleModal(el.id)}>&#10006;</span>
            <div>
              <img src={el.image} alt={el.name} />
              <h2>Full Name : {el.name}</h2>
              <p>Username : {el.username}</p>
              <p>eMail : {el.email}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

UserBox.propTypes = {
  userBox: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      name: PropTypes.string,
      username: PropTypes.string,
      email: PropTypes.string,
      image: PropTypes.string,
    })
  ),
  toggleModal: PropTypes.func.isRequired,
  sortUsers: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
