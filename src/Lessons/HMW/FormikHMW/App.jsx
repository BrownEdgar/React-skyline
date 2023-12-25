import { Formik, Form, Field, ErrorMessage } from "formik";
import "./App.scss";
import { useState } from "react";
import { nanoid } from "nanoid";
import { object as yupObject, string } from "yup";

const initialValues = {
  firstName: "",
  password: "",
  email: "",
};

const validationSchema = yupObject({
  firstName: string().required().min(3).max(18),
  password: string()
    .matches(
      /^(?=.*[A-Z]).+$/,
      "Your passwor must contain at least one upper cased symbol"
    )
    .min(8)
    .max(18)
    .required(),
  email: string().email().required(),
});

export default function App() {
  const [users, setUsers] = useState([]);

  const handleSubmit = (values, { resetForm }) => {
    const user = {
      id: nanoid(),
      ...values,
    };
    setUsers([...users, user]);
    resetForm();
  };
  return (
    <div className="App">
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {(formik) => {
          console.log(formik.errors);
          console.log(formik.touched);
          return (
            <Form>
              <h3>DORSIN</h3>
              <p>Sin up for a new Account</p>
              <label>
                First Name
                <Field type="text" name="firstName" />
              </label>
              <ErrorMessage component="p" name="firstName" className='error' />
              <label>
                Email
                <Field type="email" name="email" />
              </label>
              <ErrorMessage component="p" name="email" className='error' />
              <label>
                Password
                <Field type="password" name="password" />
              </label>
              <ErrorMessage component="p" name="password" className='error' />
              <label>
                <Field type="checkbox" name="rememberMe" />
                Remember Me
              </label>{" "}
              <input type="submit" value="Sign in" />
              <p>
                Already have an account?<button>Sign in</button>
              </p>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
