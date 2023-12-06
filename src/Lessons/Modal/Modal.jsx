import PropTypes from 'prop-types'

import './Modal.scss'

export default function Modal({ toggleModal }) {
  return (
    <div className='Modal'>
      <div className='Modal__content'>
        <h2>Are you sure?</h2>
        <button onClick={toggleModal}>cancel</button>
        <button className='btn__delete'>delete</button>
      </div>
    </div>
  )
}


Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired
}