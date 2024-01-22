import React from "react";
import FetchDataHook from "../../../customHooks/FetchDataHook";
import { Link } from "react-router-dom";
import ROUTES from "../../../Routes";
import { FiPlusCircle } from "react-icons/fi";
import "./products.scss"

export default function Products() {
  const [data, error] = FetchDataHook("http://localhost:3000/products");
  
  return (
    <div>
      <div className="products">
        {data
          ? data.map((product) => {
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
                </>
              );
            })
          : null}
        <Link
          key={"admin"}
          className="add"
          to={"/" + ROUTES.CREATE}
          style={!window.localStorage.getItem("login") ? {display: "none"} : null}
        >
          <FiPlusCircle />
        </Link>
      </div>
    </div>
  );
}
