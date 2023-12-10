import PropTypes from 'prop-types'
import "./Modal.scss";


export default function List({ toggleModal, toggleDelete }) {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2>Are you sure?</h2>
        <button className="btn__cancel" onClick={toggleModal}>
          Cancel
        </button>
        <button className='btn__delete' onClick={toggleDelete}>Delete</button>
      </div>
    </div>
  );
}


