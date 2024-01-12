import './Product.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { IoArrowBackSharp } from "react-icons/io5";
import useFetchData from '../../../Hooks/CustomHook/useFetchData';

export default function Product() {
  const { id } = useParams();
  const [data, error] = useFetchData(`http://localhost:3333/products/${id}`)

  const navigate = useNavigate()

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
            </div>
          </>
        ) : (
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
