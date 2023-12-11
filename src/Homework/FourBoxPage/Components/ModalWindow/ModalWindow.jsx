import "./ModalWindow.scss";
import PropTypes from "prop-types";

export default function ModalWindow({ toggleModal, handleDelete }) {
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
