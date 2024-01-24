import React from "react";
import "./Add.scss";
import { Field, Formik, Form } from "formik";
import axios from "axios";
import { nanoid } from "nanoid";
import moment from "moment";
// import { initialValues } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes";

export default function Add() {
  const categories = ["Phone", "Laptop", "Furniture", "Kitchen"];
  const nav = useNavigate();
  const initialValues = {
    category: "",
    name: "",
    brand: "",
    price: "",
    img: "",
  };

  const handleSubmit = (values, formik) => {
    const currentDate = moment();
    const archiveDate = currentDate.clone().add(1, "minute");

    const products = {
      id: nanoid(5),
      createDate: currentDate.format("LT"),
      archiveDate: archiveDate.format("LT"),
      ...values,
    };
    axios
      .post("http://localhost:3000/products", products)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
      .finally(() => {
        nav(ROUTES.PRODUCTS);
      });

    formik.resetForm();
  };

  return (
    <div className="Add">
      <h1>Add Products</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="form">
          <div className="left">
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="brand">Brand:</label>
              <Field type="text" id="brand" name="brand" required />
            </div>
            <div>
              <label htmlFor="price">Price:</label>
              <Field type="number" id="price" name="price" required />
            </div>
          </div>
          <div className="right">
            <div>
              <label htmlFor="category">Category:</label>
              <Field as="select" name="category" required>
                <option value="" disabled hidden>
                  Select Category
                </option>
                {categories.map((category) => (
                  <option value={category} key={category}>
                    {category}
                  </option>
                ))}
              </Field>
            </div>

            <div>
              <label htmlFor="img">Image URL:</label>
              <Field type="url" id="img" name="img" required />
            </div>
          </div>
          <div>
            <input className="submit" type="submit" value="Add Product" />
          </div>
        </Form>
      </Formik>
    </div>
  );
}
