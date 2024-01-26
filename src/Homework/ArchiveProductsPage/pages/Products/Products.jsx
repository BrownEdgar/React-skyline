import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.scss";
import axios from "axios";
import { FaTrash, FaArchive } from "react-icons/fa";
import Pagination from "../../Pagination/Pagination";

export default function Products() {
  const [page, setPage] = useState(1);
  const [perPage] = useState(8);
  const [products, setProducts] = useState([]);
  const [isLogin] = useState(Boolean(window.localStorage.getItem("login")));
  const containerClass = isLogin
    ? "Products__container"
    : "Products__container filter";

  useEffect(() => {
    fetchProducts();
  }, [isLogin]);

  const fetchProducts = async () => {
    try {
      let res;
      if (isLogin) {
        res = await axios.get("http://localhost:3000/products");
      } else {
        res = await axios.get("http://localhost:3000/products?_limit=4");
      }
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  console.log(products.length);
  const itemsCount = page * perPage;

  const currentItems = products.slice(itemsCount - perPage, itemsCount);

  const changePage = (n) => {
    setPage(n);
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const archiveProduct = async (id) => {
    try {
      const productToArchive = products.find((product) => product.id === id);
      await axios.post("http://localhost:3000/archive", productToArchive);
      await axios.delete(`http://localhost:3000/products/${id}`);
      fetchProducts();
      console.log(`Product with ID ${id} archived and deleted.`);
    } catch (error) {
      console.error("Error archiving product:", error);
    }
  };

  return (
    <div className="Products">
      <div className={containerClass}>
        {currentItems.map((product) => (
          <div className="Products__box" key={product.id}>
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
                  {isLogin && (
                    <>
                      <button
                        className="delete-button"
                        onClick={() => deleteProduct(product.id)}
                      >
                        Delete <FaTrash className="icon-trash" />
                      </button>
                      <button
                        className="archive-button"
                        onClick={() => archiveProduct(product.id)}
                      >
                        Archive <FaArchive className="icon-archive" />
                      </button>
                    </>
                  )}
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
      {!isLogin && (
        <div className="overlay">
          <p>Please Log in as Admin to view products</p>
        </div>
      )}
    </div>
  );
}

export const productsLoader = async () => {
  try {
    const res = await axios.get("http://localhost:3000/products");
    return res.data;
  } catch (error) {
    console.error("Error loading products:", error);
    return [];
  }
};
