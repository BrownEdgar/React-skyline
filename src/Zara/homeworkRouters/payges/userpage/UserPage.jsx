import './UserPage.scss'
import { Link } from 'react-router-dom'
// import useData from '../../usedata/useData'
import { Field, Form, Formik } from 'formik'
import { nanoid } from 'nanoid';
import { categories, initialValues } from '../../constants/constants';
import { user1, userInitialValues } from './user';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function UserPage() {

const [data, setData] = useState([]);
const [searchdata, setSearchdata] = useState([]);
const [currentId, setcurrentId] = useState(false)
const [add, setAdd] = useState(false);
const navigate = useNavigate()
const [user, setUser] = useState(true)

  const addProduct = ()=>{
    setAdd(!add)
  }

  const handleDelete = (id) =>{
    axios.delete(`http://localhost:3000/products/${id}`)
    .then(()=>setcurrentId(!currentId))
    .catch(err => console.log(err))
  }

  // const [data, error] = useData('http://localhost:3000/products')
  useEffect(()=>{
  axios(`http://localhost:3000/products`)
  .then(res => {
    setData(res.data)
    setSearchdata(res.data) 
  })
  .catch(err => console.log(err))
},[currentId])
  
  const handleSubmit = (values, formik) => {
    const products = {
      id: nanoid(5),
      ...values
    }

    axios.post('http://localhost:3000/products', products)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        .finally(() => {
          navigate(ROUTES.HOME)
        })
      formik.resetForm()
    }

  

  const handleSearch = ({target})=>{
    // console.log(searchValue);
    console.log(target.value);
   const searchValue =target.value
    if (!searchValue) return data;
    console.log(data);
    // const result = data.filter(elem => elem.title.includes(searchValue))
    const result = data.filter(elem => elem.title == searchValue)

    console.log(result);
    setData(result)
  }

  const userSubmit = (values, formik) => {
    if(user1.username === values.username && user1.password == values.password){
      setUser(!user)
    }
    formik.resetForm()
  }

  return (
    <>
    {
      user ? <div className='form'>
        <Formik
            initialValues={userInitialValues}
            onSubmit={userSubmit}
          >
            <Form>
              <div className='forms'>
                <label htmlFor="username">User name</label>
                <Field type="text" id='username' name="username" />
              </div>
              <div className='forms'>
                <label htmlFor="password">Password</label>
                <Field type="password" id='password' name="password" />
              </div>
              <div className='forms'>
                <input className='submit' type="submit" value='log in' />
              </div>
            </Form>
          </Formik>
      </div> 
      :<div className='userpage'>
      <h1> Our Products </h1>
      <h3 className='add' onClick={addProduct}>Add new product</h3>
      {
        add ?  
        <div className='form'>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className='forms'>
                <label htmlFor="title">Title</label>
                <Field type="text" id='title' name="title" />
              </div>
              <div className='forms'>
                <label htmlFor="price">Price</label>
                <Field type="number" id='price' name="price" />
              </div>
              <div className='forms'>
                <Field as='select' id='select' name='category'>
                  {categories.map(category => {
                    return <option value={category} key={category}>{category}</option>
                  })}
                </Field>
              </div>
              <div className='forms'>
                <label htmlFor="description">Product description</label>
                <Field as="textarea" id='description' name='description'>
                  Enter your description
                </Field>
              </div>
              <div className='forms'>
                <label htmlFor="image">Image url</label>
                <Field type="url" id='image' name="image" />
              </div>
              <div className='forms'>
                <input className='submit' type="submit" value='save product' />
              </div>
            </Form>
          </Formik>
        </div> : ""
      }
      <div>
        <input type="search" className='search' placeholder='search' onChange={handleSearch}/>
      </div>
      <div className='userPage'>
        {data ? 
          searchdata.map(product => {
            return <div className='userPage__item' key={product.id} >
              <div onClick={()=> handleDelete(product.id)}><RiDeleteBin6Line /></div>
              <Link to={'/' + ROUTES.PRODUCTUSER.replace(':id', product.id)}>
                <img src={product.image} />
                <h2>{product.title}</h2>
              </Link>
            </div>
          }) 
        : <h2>No products...</h2>
        }
      </div>
    </div>
    }
    
    </>
    
  )
}
