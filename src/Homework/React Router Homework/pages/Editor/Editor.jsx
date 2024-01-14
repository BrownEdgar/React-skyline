import axios from "axios";
import React from "react";
import "./Editor.scss";
import { Link, useLoaderData } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

export default function Editor() {
  const products = useLoaderData();
  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`);
  };

  return (
    <div className="Editor">
      <h1>Edit Products</h1>

      <div className="Editor__container">
        {products.map((product) => (
          <div className="Editor__box" key={product.id}>
            <div className="overlay">
              <span onClick={deleteProduct(product.id)}>
                <MdDeleteForever className="icon-delete" />
              </span>
              <div className="name">
                <p className="brand">{`${product.brand}:`}</p>
                <p className="product-name">{product.name}</p>
              </div>
              <p className="price">{product.price + "$"}</p>
              <Link className="view" to={`/products/${product.id}`}>
                View
              </Link>
            </div>
            <div className="img">
              <img src={product.img} alt={product.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const editorLoader = async () => {
  const res = await axios.get("http://localhost:3000/products", {});
  console.log(res.data);
  return res.data;
};
