import axios from "axios";
import { Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import { categories, initialValues } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes";
import "./home.scss";

export default function Home() {
  const navigate = useNavigate();
  const handleSubmit = (values, formik) => {
    const products = {
      id: nanoid(5),
      ...values,
    };
    axios
      .post("http://localhost:3333/products", products)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(() => {
        navigate(ROUTES.PRODUCTS);
      });
    formik.resetForm();
  };

  return (
    <div>
      <h1>Add product</h1>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label htmlFor="title">Title</label>
            <Field type="text" id="title" name="title" />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <Field type="number" id="price" name="price" />
          </div>
          <div>
            <Field as="select" name="category">
              {categories.map((category) => {
                return (
                  <option value={category} key={category}>
                    {category}
                  </option>
                );
              })}
            </Field>
          </div>
          <div>
            <label htmlFor="description">Product description</label>
            <Field as="textarea" id="description" name="description">
              Enter your description
            </Field>
          </div>
          <div>
            <label htmlFor="image">Image url</label>
            <Field type="url" id="image" name="image" />
          </div>
          <div>
            <input type="submit" value="save product" />
          </div>
        </Form>
      </Formik>
    </div>
  );
}
