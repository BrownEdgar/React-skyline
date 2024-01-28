import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./Editor.scss";

export default function Editor() {
  const { editId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const categories = ["Table Set", "Sofa", "Bed", "Dresser", "Storage"];
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct(editId);
  }, [editId]);

  const fetchProduct = async (id) => {
    try {
      setLoading(true);
      const productsRes = await axios.get(
        `http://localhost:3000/products/${id}`
      );

      setProduct(productsRes.data);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
      setLoading(false);
    }
  };

  const validationSchema = Yup.object().shape({
    brand: Yup.string().required("Brand is required"),
    name: Yup.string().required("Name is required"),
    category: Yup.string().required("Category is required"),
    img: Yup.string().url("Invalid URL").required("Image URL is required"),
    price: Yup.number().required("Price is required"),
  });

  const handleSubmit = async (values) => {
    try {
      await axios.patch(`http://localhost:3000/products/${editId}`, {
        brand: values.brand,
        name: values.name,
        category: values.category,
        img: values.img,
        price: values.price,
      });
    } catch (error) {
      console.error("Error updating product:", error);
    }
    navigate(-1);
  };

  return (
    <div className="Editor">
      <h2>Edit Product</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Formik
          initialValues={{
            brand: product.brand,
            name: product.name,
            category: product.category,
            img: product.img,
            price: product.price,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div>
              <label htmlFor="brand">Brand:</label>
              <Field type="text" id="brand" name="brand" />
              <ErrorMessage name="brand" component="div" />
            </div>
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label htmlFor="category">Category:</label>
              <Field className="category" as="select" name="category">
                <option value="" disabled hidden>
                  Select Category
                </option>
                {categories.map((category) => (
                  <option value={category} key={category}>
                    {category}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="ccategory" component="div" />
            </div>
            <div>
              <label htmlFor="img">Image URL:</label>
              <Field type="text" id="img" name="img" />
              <ErrorMessage name="img" component="div" />
            </div>
            <div>
              <label htmlFor="price">Price:</label>
              <Field type="number" id="price" name="price" />
              <ErrorMessage name="price" component="div" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      )}
    </div>
  );
}
