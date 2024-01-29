import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Edit.scss";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../../Pagination/Pagination";

export default function Edit() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage] = useState(8);

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`);
  };

  const itemsCount = page * perPage;

  const currentItems = products.slice(itemsCount - perPage, itemsCount);

  const changePage = (n) => {
    setPage(n);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3000/products", {});
      setProducts(res.data);
    };

    fetchData();
  }, [products]);
  return (
    <div className="Edit">
      <div className="Edit__container">
        {currentItems.map((product) => (
          <div className="Edit__box" key={product.id}>
            <Link className="img" to={`/edit/${product.id}`}>
              <img src={product.img} alt={product.name} />
            </Link>
            <div className="info">
              <div className="name">
                <p className="product-name">
                  <span className="brand">{`${product.brand}:`}</span>
                  {product.name.length > 30
                    ? `${product.name.slice(0, 30)}...`
                    : product.name}
                </p>
              </div>
              <div className="interact">
                <p className="price">{product.price + "$"}</p>
                <div className="buttons">
                  <button
                    className="delete-button"
                    onClick={() => {
                      deleteProduct(product.id);
                    }}
                  >
                    Delete <FaTrash className="icon-trash" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {products.length > perPage && currentItems.length > 0 && (
        <Pagination
          pages={perPage}
          total={products.length}
          changePage={changePage}
        />
      )}
    </div>
  );
}
