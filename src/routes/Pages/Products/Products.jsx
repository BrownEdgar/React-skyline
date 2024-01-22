import React from "react";
import FetchDataHook from "../../../customHooks/FetchDataHook";
import { Link } from "react-router-dom";
import ROUTES from "../../../Routes";
import { FiPlusCircle } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./products.scss"
import axios from "axios";

export default function Products() {
  const [data, error] = FetchDataHook("http://localhost:3000/products");
  const deletItem = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`)
      .then(data => window.location.reload())
  }
  return (
    <div>
      <div className="products">
        {data
          ? data.map((product) => {
            console.log(product)
            return (
              <>
                <Link
                  key={product.id}
                  className="product"
                  to={"/" + ROUTES.PRODUCT.replace(":id", product.id)}
                >
                  {
                    <div className={product.title + product.category}>
                      <img src={product.image} alt="" />
                      <span className="alarm">{product.alarm}</span>
                      <strong>{product.title}</strong>
                      <span>{product.category}</span>
                      <strong>{product.price}</strong>
                    </div>
                  }
                </Link>
                <RiDeleteBin6Line
                  className="delete"
                  style={
                    !window.localStorage.getItem("login")
                      ? { display: "none" }
                      : null
                  }
                  onClick={() => deletItem(product.id)}
                />
              </>
            );
          })
          : null}
        <Link
          key={"admin"}
          className="add"
          to={"/" + ROUTES.CREATE}
          style={!window.localStorage.getItem("login") ? { display: "none" } : null}
        >
          <FiPlusCircle />
        </Link>
      </div>
    </div>
  );
}
