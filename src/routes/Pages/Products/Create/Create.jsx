import React from 'react'
import { Formik, Form, Field } from 'formik'
import { nanoid } from "nanoid";
import axios from 'axios'
import './Create.scss'
export default function Create() {
  const categories = [
    "Women's Shoes",
    "Big Kids' Shoes",
    "Men's Shoes",
    "Little Kids' Shoes",
    "Boots"
  ]

  const initialValue = {
    alarm: '',
    name: '',
    title: '',
    price: '',
    category: '',
    description: '',
    image: '',
  }

  const handleSubmit = (values) => {
    const products = {
      id: nanoid(5),
      ...values
    }
    console.log(products)
    axios.post("http://localhost:3000/products", products)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  console.log(nanoid(5));
  return (
    <div className='create'>
      <Formik initialValues={initialValue} onSubmit={handleSubmit}>
        <Form>
          <div className='Title'>
            <label htmlFor="title"></label>
            <Field type="text" id="title" name="title" required placeholder="Name" />
          </div>

          <div className='Select' >
            <Field as="select" name="category" className="categorys" required>
              <option value="" disabled>Select category</option>
              {categories.map((category) => {
                return (
                  <option value={category} key={category}>
                    {category}
                  </option>
                );
              })}
            </Field>
          </div>

          <div className='Price'>
            <label htmlFor="price"></label>
            <Field type="text" id="price" name="price" required placeholder='Price' />
          </div>

          <div className='Description'>
            <label htmlFor="description"></label>
            <Field as="textarea" id="description" name="description" placeholder="Write description" />
          </div>

          <div className='Img'>
            <label htmlFor="image"></label>
            <Field type="url" id="image" name="image" placeholder="image url" />
          </div>
          <div className='Submit'>
            <input type="submit" value="save product" />
          </div>
        </Form>
      </Formik>
    </div>
  );
}
