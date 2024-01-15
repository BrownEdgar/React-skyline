import './ProductUser.scss'
import { nanoid } from 'nanoid';
import { Field, Form, Formik } from 'formik'
import { categories, initialValues } from '../../constants/constants';
import { useNavigate, useParams } from 'react-router-dom'
import { IoArrowBackSharp } from "react-icons/io5";
import useData from '../../usedata/useData';
import { TbExchange } from "react-icons/tb";
import { useState } from 'react';

export default function ProductUser() {
  const { id } = useParams();
  const [data, error] = useData(`http://localhost:3000/products/${id}`)

  const [change, setChange] = useState(false)

  const navigate = useNavigate()
  const handleChange = ()=>{
    setChange(!change)
  }
  const handleSubmit = (values, formik) => {
    
    formik.resetForm()
  }
  if (error) {
    return <pre>
      {JSON.stringify(error, null, 1)}
    </pre>
  }

  return (
    <div className='Product'>
      {
        data ? (
          <>
            <img src={data.image} className='Product__image' />
            <div className="info">
              <h2>{data.title}</h2>
              <p>data.description</p>
              <h3>price: {data.price}</h3>
              <h3>category: {data.category}</h3>
              <button className='Product__back' onClick={() => navigate(-1)}>
                <IoArrowBackSharp />
                go back
              </button>
              <button className='Product__back' onClick={handleChange}>
              <TbExchange />
              Change
              </button>
            </div>
            {
              change ? <div className='form'>
                <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}>
                <Form>
                  <div className='forms'>
                    <label htmlFor="title">{data.title}</label>
                    <Field type="text" id='title' name="title" />
                  </div>
                  <div className='forms'>
                    <label htmlFor="price">{data.price}</label>
                    <Field type="number" id='price' name="price" />
                  </div>
                  <div className='forms'>
                    <Field as='select' name='category' id='select'>
                      {categories.map(category => {
                        return <option value={category} key={category}>{data.category}</option>
                      })}
                    </Field>
                  </div>
                  <div className='forms'>
                    <label htmlFor="description">{data.description}</label>
                    <Field as="textarea" id='description' name='description'>
                      Enter your description
                    </Field>
                  </div>
                  <div className='forms'>
                    <label htmlFor="image">Image url</label>
                    <Field type="url" id='image' name="image" />
                  </div>
                  <div className='forms'>
                    <input type="submit" className='submit' value='save product' />
                  </div>
                </Form>
                </Formik>
              </div>
              : ""
            }
          </>
        ) 
        : (
          <>
            <h2>Product not found</h2>
            <button className='Product__back' onClick={() => navigate(-1)}>
              <IoArrowBackSharp />
              go back
            </button>
          </>
          )
      }
    </div>
  )
}
