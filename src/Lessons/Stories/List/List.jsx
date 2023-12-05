import './List.scss'

export default function List({ list }) {
  return (
    <div className='List'>
      {list.map(elem => {
        return (
          <article key={elem.id} className='List__item'>
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
