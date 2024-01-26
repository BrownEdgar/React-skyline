import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Archived.scss";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

import { VscTriangleLeft } from "react-icons/vsc";

export default function Archived() {
  const [products, setProducts] = useState([]);

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3000/archive/${id}`);
  };

  const archiveProduct = async (id) => {
    const productToArchive = products.find((product) => product.id === id);

    await axios.post("http://localhost:3000/products", productToArchive);
    await deleteProduct(id);
    console.log(`Product with ID ${id} archived and deleted.`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3000/archive", {});
      setProducts(res.data);
    };

    fetchData();
  }, [products]);

  return (
    <div className="Archive">
      <h1>Archived Inventory</h1>

      <div className="Archive__container">
        {products.map((product) => (
          <div className="Archive__box" key={product.id}>
            <Link className="img" to={`/${product.id}`}>
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
                  <button
                    className="archive-button"
                    onClick={() => archiveProduct(product.id)}
                  >
                    <VscTriangleLeft className="icon-archive" /> Send Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
