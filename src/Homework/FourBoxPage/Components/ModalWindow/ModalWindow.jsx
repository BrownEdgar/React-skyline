import { useEffect } from "react";
import "./ModalWindow.scss";
import PropTypes from "prop-types";

export default function ModalWindow({ toggleModal, handleDelete }) {
  useEffect(() => {
    const handleClick = (e) => {
      const { className } = e.target;
      if (className === "Modal") {
        toggleModal();
      }
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="Modal">
      <div className="Modal__Content">
        <h2>Are You Sure?</h2>
        <button className="del-btn" onClick={handleDelete}>
          Yes
        </button>
        <button onClick={toggleModal}>No</button>
      </div>
    </div>
  );
}

ModalWindow.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
