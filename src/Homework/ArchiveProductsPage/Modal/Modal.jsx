import React from "react";
import "./Modal.scss";

const Modal = ({ isOpen, handleClose, handleConfirm }) => {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <p>Are you sure you want to delete this product?</p>
        <div className="modal-buttons">
          <button onClick={handleConfirm}>Yes</button>
          <button onClick={handleClose}>No</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
