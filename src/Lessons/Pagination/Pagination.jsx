import classNames from 'classnames';
import React from 'react'

export default function Pagination({ perpage, total, changePage, page }) {
  const numbers = [];
  for (let i = 1; i <= Math.ceil(total / perpage); i++) {
    numbers.push(i)
  }

  return (
    <ul className='pagination'>
      {
        numbers.map(number => (
          <li
            key={number}
            onClick={() => changePage(number)}
            className={classNames({
              'active': number === page
            })}
          >
            <a href="#">{number}</a>
          </li>
        ))
      }
    </ul>
  )
}
