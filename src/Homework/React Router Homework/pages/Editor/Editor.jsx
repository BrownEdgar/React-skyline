import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import "./Editor.scss";
import ROUTES from "../../routes";

export default function Editor() {
  const [products, setProducts] = useState([]);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      setProducts(res.data);
    });
  }, [currentId]);

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`);
  };

  return (
    <div className="Editor">
      <h1>Edit Products</h1>
      <Link to={"/" + ROUTES.ADD}>
        <FaPlusCircle className="add-icon" />
      </Link>

      <div className="Editor__container">
        {products.map((product) => (
          <div className="Editor__box" key={product.id}>
            <div className="overlay">
              <span
                onClick={() => {
                  deleteProduct(product.id);
                  setCurrentId(product.id);
                }}
              >
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
