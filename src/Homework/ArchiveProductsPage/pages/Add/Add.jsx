import React from "react";
import "./Add.scss";
import { Field, Formik, Form } from "formik";
import axios from "axios";
import { nanoid } from "nanoid";
import moment from "moment";
import * as Yup from "yup"; // Import Yup for validation

import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes";

export default function Add() {
  const categories = ["Table Set", "Sofa", "Bed", "Dresser", "Storage"];
  const nav = useNavigate();
  const initialValues = {
    category: "",
    name: "",
    brand: "",
    price: "",
    img: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    brand: Yup.string().required("Brand is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be a positive number"),
    category: Yup.string().required("Category is required"),
    img: Yup.string().url("Invalid URL").required("Image URL is required"),
  });

  const handleSubmit = async (values, formik) => {
    try {
      await validationSchema.validate(values, { abortEarly: false });
      const currentDate = moment().format("lll");

      const products = {
        id: nanoid(3),
        createDate: currentDate,
        ...values,
      };
      await axios.post("http://localhost:3000/products", products);
      nav(ROUTES.PRODUCTS);
      formik.resetForm();
    } catch (error) {
      console.error("Validation Error:", error);
    }
  };

  return (
    <div className="Add">
      <h1>Add Furniture</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="form">
          <div className="left">
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" />
            </div>
            <div>
              <label htmlFor="brand">Brand:</label>
              <Field type="text" id="brand" name="brand" />
            </div>
            <div>
              <label htmlFor="price">Price:</label>
              <Field type="number" id="price" name="price" />
            </div>
          </div>
          <div className="right">
            <div>
              <label htmlFor="category">Category:</label>
              <Field as="select" name="category">
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
              <Field type="url" id="img" name="img" />
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
