import React from 'react'
import { Formik, Form, Field} from 'formik'

export default function Create() {
  const categories = [
    "Women's Shoes",
    "Big Kids' Shoes",
    "Men's Shoes",
    "Little Kids' Shoes",
    "Boots"
  ]
    
  const initialValue = {
id: '',
alarm: '',
name: '',
title: '',
price: '',
category: '',
description: '',
image: '',
  }

  const handleSubmit = (v) => {
    console.log(v);
  }
  
  return (
    <div>
      <Formik initialValues={initialValue} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label htmlFor="title">Title</label>
            <Field type="text" id="title" name="title" required />
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
            <label htmlFor="price">Price</label>
            <Field type="text" id="price" name="price" required />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <Field as="textarea" id="description" name="description" />
          </div>

          <div>
            <label htmlFor="image">Image</label>
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
