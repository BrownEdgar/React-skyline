import React from 'react'
import moment from 'moment'
export default function Posts({ posts, archivePost }) {
  return (
    <div className='Posts'>
      {posts.map(elem => {
        return (
          <div className="Posts__item" key={elem.id}>
            <div className="Posts__flex">
              <span>{moment(moment(elem.createDate), "YYYYMMDD").fromNow()}</span>
              <span onClick={() => archivePost(elem.id)}>archive</span>
            </div>
            <h2>{elem.title}</h2>
            <p>{elem.body}</p>
          </div>
        )
      })}
    </div>
  )
}
