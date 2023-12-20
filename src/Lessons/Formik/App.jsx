import { Formik, Form, Field, ErrorMessage } from 'formik';
import './App.scss'
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { object as yupObject, string } from 'yup';


const initialValues = {
  username: '',
  password: '',
  email: ''
}

const validationSchema = yupObject({
  username: string().required().min(3).max(18),
  password: string().matches(/^[A-Z]/, "password must by start with upperCase").min(8).max(18).required(),
  email: string().email().required(),
})



export default function App() {
  const [users, setUsers] = useState([])

  const handleSubmit = (values, { resetForm }) => {
    const user = {
      id: nanoid(),
      ...values
    }
    setUsers([...users, user])
    resetForm()
  }
  return (
    <div className='App'>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {
          (formik) => {
            console.log(formik.errors)
            console.log(formik.touched)
            return (
              <Form>
                <Field type="text" name="username" />
                <ErrorMessage component='p' name='username' />
                <Field type="email" name="email" />
                <ErrorMessage component='p' name='email' />
                <Field type="password" name="password" />
                <ErrorMessage component='p' name='password' />
                <input type="submit" />
              </Form>
            )
          }
        }
      </Formik>
    </div>
  )
}


