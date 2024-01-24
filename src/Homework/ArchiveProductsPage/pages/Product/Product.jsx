import React, { useEffect, useState } from "react";
import "./Product.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    </div>
  );
}
