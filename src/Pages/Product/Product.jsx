import React from 'react'
import FetchDataHook from '../../customHooks/FetchDataHook'
import { Link } from "react-router-dom";
import ROUTES from "../../Routes";


export default function Products() {
  const [data, error] = FetchDataHook("http://localhost:5173/products");
  console.log(data);
  return (
    <div>
      <h1> Our Products </h1>
      <div className="products">
        {data ? (
          data.map((product) => {
            return (
              <Link
                className="products__item"
                key={product.id}
                to={"/" + ROUTES.PRODUCT.replace(":id", product.id)}
              >
                <img src={product.image} />
                <h2>{product.title}</h2>
              </Link>
            );
          })
        ) : (
          <h2>No products...</h2>
        )}
      </div>
    </div>
  );
}