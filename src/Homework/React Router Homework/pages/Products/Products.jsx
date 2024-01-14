import React from "react";
import { Link } from "react-router-dom";
import "./Products.scss";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import ROUTES from "../../routes";

export default function Products() {
  const products = useLoaderData();

  return (
    <div className="Products">
      <Link to={"/" + ROUTES.EDITOR}>
        <p className="edit-button">
          Edit <FaEdit className="icon-edit" />
        </p>
      </Link>
      <h1>Products</h1>

      <div className="Products__container">
        {products.map((product) => (
          <div className="Products__box" key={product.id}>
            <div className="overlay">
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

export const productsLoader = async () => {
  const res = await axios.get("http://localhost:3000/products", {});
  console.log(res.data);
  return res.data;
};
