import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Archived.scss";
import axios from "axios";
import { FaTrash, FaArchive } from "react-icons/fa";

export default function Archived() {
  const [products, setProducts] = useState([]);
  const [currentId, setCurrentId] = useState(null);

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
  }, []); // Empty dependency array ensures useEffect runs once on mount

  return (
    <div className="Archive">
      <h1>Archived Products</h1>

      <div className="Archive__container">
        {products.map((product) => (
          <div className="Archive__box" key={product.id}>
            <Link className="img" to={`/${product.id}`}>
              <img src={product.img} alt={product.name} />
            </Link>
            <div className="overlay">
              <div className="name">
                <p className="brand">{`${product.brand}:`}</p>
                <p className="product-name">{product.name}</p>
              </div>
              <p className="price">{product.price + "$"}</p>

              <button
                className="delete-button"
                onClick={() => {
                  deleteProduct(product.id);
                  setCurrentId(product.id);
                }}
              >
                Delete <FaTrash className="icon-trash" />
              </button>

              <button
                className="archive-button"
                onClick={() => archiveProduct(product.id)}
              >
                Archive <FaArchive className="icon-archive" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
