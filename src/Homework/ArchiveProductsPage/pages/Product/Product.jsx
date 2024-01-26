import React, { useEffect, useState } from "react";
import "./Product.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { IoArrowBackCircleSharp } from "react-icons/io5";
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
      <div className="Product__box">
        <img className="product-img" src={product.img} alt={product.name} />
        <Link className="go-back" to={ROUTES.PRODUCTS}>
          <IoArrowBackCircleSharp />
        </Link>
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
            <i>
              <p>{`${product.price}$`}</p>
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}
