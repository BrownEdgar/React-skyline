import React from 'react'
import { initialValues } from '../constants/constants'
import { Field, Form, Formik } from 'formik'
import { nanoid } from 'nanoid';
import axios from 'axios';
import moment from 'moment'
import { useState } from 'react';

export default function AddPosts() {

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

      formik.resetForm()
    }

  return (
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
  )
}
