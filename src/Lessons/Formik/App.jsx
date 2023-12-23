import { Formik, Form, Field, ErrorMessage } from "formik";
import "./App.scss";
import { useState } from "react";
import { nanoid } from "nanoid";
import { object as yupObject, string } from "yup";
import Users from "./Users";

const languages = ["html", "css", "javascript", "react"];
const initialValues = {
  username: "",
  password: "",
  email: "",
  language: "",
};

const validationSchema = yupObject({
  username: string().required().min(3).max(18),
  password: string()
    .matches(/^(?=.*[A-Z]).+$/, "password must by start with upperCase")
    .min(8)
    .max(18)
    .required(),
  email: string().email().required(),
  language: string().oneOf(languages),
});

export default function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "Anahit",
      password: "Anahit34434",
      email: "Anahit@gmail.com",
      language: "javascript",
    },
    {
      id: 2,
      username: "Ani",
      password: "Anahit34434",
      email: "Anahit@gmail.com",
      language: "html",
    },
    {
      id: 3,
      username: "Hakob",
      password: "Anahit34434",
      email: "Anahit@gmail.com",
      language: "css",
    },
    {
      id: 4,
      username: "Arman",
      password: "Arman34434",
      email: "Arman@gmail.com",
      language: "react",
    },
  ]);

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
          return (
            <Form>
              <ErrorMessage>
                {(errors) => {
                  return (
                    <div className="errors">
                      {Object.keys(errors).map((elem) => {
                        return (
                          <p key={elem} className="errors">
                            {errors[elem]}
                          </p>
                        );
                      })}
                    </div>
                  );
                }}
              </ErrorMessage>
              <Field type="text" name="username" />
              <Field type="email" name="email" />
              <Field type="password" name="password" />
              <Field as="select" name="language" dafaultvalue="" required>
                <option value="" disabled>
                  select language
                </option>
                <option value="html">html</option>
                <option value="css">css</option>
                <option value="javascript">javascript</option>
                <option value="react">react</option>
              </Field>
              <input type="submit" />
            </Form>
          );
        }}
      </Formik>

      <hr />
      <Users languages={languages} users={users} />
    </div>
  );
}
