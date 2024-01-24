import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import moment from "moment";
import { nanoid } from "nanoid";

const DB_URL = import.meta.env.VITE_DB_URL;

const initialValues = {
  title: "",
  body: "",
};

const validationSchema = yup.object({
  title: yup.string().required(),
  body: yup.string().min(10).required(),
});

export default function AddProduct({ onPostSubmit }) {
  const handleSubmit = (values, { resetForm }) => {
    const post = {
      id: nanoid(6),
      createDate: moment().valueOf(),
      ...values,
    };

    axios
      .post(DB_URL, post)
      .then(() => {
        onPostSubmit();
      })
      .catch((err) => console.log(err))
      .finally(() => resetForm());
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnChange={false}
    >
      <Form>
        <label htmlFor="title">Title</label>
        <Field type="text" name="title" id="title" />
        <ErrorMessage name="title" component={"p"} />
        <label htmlFor="body">Body</label>
        <Field as="textarea" name="body" id="body" rows="10" />
        <ErrorMessage name="body" component={"p"} />
        <input type="submit" value="Add Post" />
      </Form>
    </Formik>
  );
}
