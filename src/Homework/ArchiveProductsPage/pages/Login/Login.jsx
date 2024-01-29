import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.scss";

export default function Login() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    if (values.username === "admin" && values.password === "admin") {
      window.localStorage.setItem("login", true);

      navigate("/");
    } else {
      setLoginError(true);
    }
    setSubmitting(false);
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <div className="input">
              <div className="input-text">
                <label htmlFor="username">Username:</label>
                <Field type="text" id="username" name="username" />
              </div>
              <ErrorMessage className="error" name="username" component="div" />
            </div>
            <div className="input">
              <div className="input-text">
                <label htmlFor="password">Password:</label>
                <Field type="password" id="password" name="password" />
              </div>
              <ErrorMessage className="error" name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            {loginError && (
              <p className="error-submit">Invalid login or password</p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
