import axios from 'axios'
import { useEffect, useState } from 'react'

import { initialValues } from '../constants/constants'
import { Field, Form, Formik } from 'formik'
import { nanoid } from 'nanoid';
import moment from 'moment'

import './App.scss'
import Pagination from './Pagination';
import Loader from './Loader';
// import AddPosts from './AddPosts';

export default function App() {
  const [posts, setPosts] = useState([])
  const [perpage] = useState(10);
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [add, setAdd] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios('http://localhost:3000/posts', {
      params: {
        _limit: perpage,
        _start: ((page - 1) * perpage)
      }
    })
      .then(res => setPosts(res.data))
      .finally(() => setLoading(false))
  }, [perpage, page, add])


  const handleSubmit = (values, formik) => {
    const post = {
      id: nanoid(5),
      createDate: `${moment()}`,
      archiveDate:" ",
      ...values
    }
    axios.post('http://localhost:3000/posts', post)
    .then(res => console.log(res))
    .catch(err => console.log(err))

    setAdd(!add)
  formik.resetForm()
}




  const changePage = (n) => {
    setPage(n)
  }

  return (
    <div className="App">
      <div className="Posts">

        {
          loading
            ? <Loader />
            : (
              <>
                <div className='form'>
                  <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                  >
                    <Form>
                      <div className='forms'>
                        <label htmlFor="title">Title</label>
                        <Field type="text" id='title' name="title" />
                      </div>
                      <div className='forms'>
                        <label htmlFor="body">New post</label>
                        <Field as="textarea" id='body' name='body'>
                          Enter your post
                        </Field>
                      </div>
                      <div className='forms'>
                        <input className='submit' type="submit" value='Add post' />
                      </div>
                    </Form>
                  </Formik>
                </div>
                {
                  posts.map(post => {
                    return <p key={post.id}>{post.title}</p>
                  })
                }
              </>
            )
        }
      </div>
      <Pagination
        perpage={perpage}
        total={100}
        page={page}
        changePage={changePage}
      />
    </div>
  )
}
