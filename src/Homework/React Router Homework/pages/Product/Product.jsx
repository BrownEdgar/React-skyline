import React, { useEffect, useState } from "react";
import "./Product.scss";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Error from "../Error/Error";
import ROUTES from "../../routes";

export default function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (productId) {
      axios
        .get(`http://localhost:3000/products/${productId}`)
        .then((res) => setProduct(res.data));
    }
  }, [productId]);

  return (
    <div className="Product">
      {product ? (
        <div className="Product__box">
          <Link to={"/" + ROUTES.PRODUCTS}>
            <IoReturnUpBackOutline className="icon" />
          </Link>

          <img src={product.img} alt={product.name} />
          <div className="info">
            <div className="title">
              <p>Brand:</p>
              <p>Name:</p>
              <p>Category:</p>
              <p>Price:</p>
            </div>
            <div className="desc">
              <p>{product.brand}</p>
              <p>{product.name}</p>
              <p>{product.category}</p>
              <p>{product.price}</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Error />
        </>
      )}
    </div>
  );
}
