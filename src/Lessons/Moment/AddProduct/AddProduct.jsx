import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import moment from 'moment'
import * as yup from 'yup'
import { nanoid } from 'nanoid'
import axios from 'axios'

const DB_URL = import.meta.env.VITE_DB_URL;

const initialValues = {
  "title": "",
  "body": "",
}

const validationSchema = yup.object({
  "title": yup.string().required(),
  "body": yup.string().min(10).required(),
  "createDate": yup.string().default(moment().format()),
  "archiveDate": yup.string().default(moment().add(10, 'days').calendar())
})

export default function AddProduct() {

  const handleSubmit = (values, { resetForm }) => {
    const post = {
      id: nanoid(6),
      createDate: moment().valueOf(),
      archiveDate: moment().add(2, 'minutes').calendar(),
      ...values
    }
    axios.post(DB_URL, post)
      .then(res => window.location.reload())
      .catch(err => console.log(err))
      .finally(() => resetForm())
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnChange={false}
    >
      <Form>
        <label htmlFor="title">Title</label>
        <Field type="text" name='title' id='title' />
        <ErrorMessage name='title' component={'p'} />
        <label htmlFor="body">Body</label>
        <Field as='textarea' name='body' id='body' rows="10" />
        <ErrorMessage name='body' component={'p'} />
        <input type="submit" />
      </Form>
    </Formik>
  )
}
