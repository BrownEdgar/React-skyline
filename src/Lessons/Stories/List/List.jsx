import PropTypes from 'prop-types'
import './List.scss'

export default function List({ list, deleteItem }) {

  return (
    <div className='List'>
      {list.map(elem => {
        return (
          <article key={elem.id} className='List__item'>
            <span onClick={() => deleteItem(elem.id)}>&#10006;</span>
            <img src={elem.image} alt={elem.title} />
            <div className='List__content'>
              <h2>{elem.title}</h2>
              <p>{elem.desc}</p>
              <button>Go someWhere</button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.exact(
      {
        id: PropTypes.number,
        title: PropTypes.string,
        image: PropTypes.string,
        desc: PropTypes.string,
      }
    )
  ),
  deleteItem: PropTypes.func.isRequired
}
