import React from 'react'

export default function Pagination({perpage, total, changePage, page}) {
    const nums = []
    for (let i = 1; i <= Math.ceil(total / perpage); i++) {
        nums.push(i)
    }
    return (
      <div className='pegination'>
          <ul>
                    {
                    nums.map(elem => {
                        return (
                            <li key={elem} onClick={(elem) => changePage(elem)}
                    
                            >
                            <a href="#">{elem}</a>
                          </li>
                        );
                })
                    }
          </ul>
    </div>
  )
}
