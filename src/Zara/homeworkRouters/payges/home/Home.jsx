
import { Link } from 'react-router-dom'
import useData from '../../usedata/useData'
import './Home.scss'
import ROUTES from '../../routes'

export default function Home() {
  const [data, error] = useData('http://localhost:3000/products')

  return (
    <div>
      <h1> Our Products </h1>
      <div className='home'>
        {data ? data.map(product => {
          return <Link className='home__item' key={product.id} to={'/' + ROUTES.PRODUCT.replace(':id', product.id)}>
            <img src={product.image} />
            <h2>{product.title}</h2>
          </Link>
        }) : <h2>No products...</h2>}
      </div>
    </div>
  )
}
