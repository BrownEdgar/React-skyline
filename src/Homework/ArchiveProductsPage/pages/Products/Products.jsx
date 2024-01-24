import { useState } from "react";
import { Link } from "react-router-dom";
import "./Products.scss";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { FaEdit, FaTrash, FaArchive } from "react-icons/fa";

export default function Products() {
  const products = useLoaderData();
  const [currentId, setCurrentId] = useState(null);

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`);
  };

  const archiveProduct = async (id) => {
    const productToArchive = products.find((product) => product.id === id);

    await axios.post("http://localhost:3000/archive", productToArchive);
    await deleteProduct(id);
    console.log(`Product with ID ${id} archived and deleted.`);
  };

  return (
    <div className="Products">
      <h1>Products</h1>

      <div className="Products__container">
        {products.map((product) => (
          <div className="Products__box" key={product.id}>
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

export const productsLoader = async () => {
  const res = await axios.get("http://localhost:3000/products", {});
  return res.data;
};
