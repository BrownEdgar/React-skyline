import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.scss";
import axios from "axios";
import { FaTrash, FaArchive } from "react-icons/fa";
import Pagination from "../../Pagination/Pagination";
import moment from "moment";

import ROUTES from "../../routes";
import Modal from "../../Modal/Modal";

export default function Products() {
  const [page, setPage] = useState(1);
  const [perPage] = useState(8);
  const [products, setProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isLogin] = useState(Boolean(window.localStorage.getItem("login")));
  const containerClass = isLogin
    ? "Products__container"
    : "Products__container filter";

  useEffect(() => {
    fetchProducts();
  }, [isLogin, filterCategory]);

  const fetchProducts = async () => {
    try {
      let url = "http://localhost:3000/products?archived=no";
      if (!isLogin) {
        url += "&_limit=4";
      }

      if (filterCategory) {
        url += `&category=${filterCategory}`;
      }

      const res = await axios.get(url);
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleFilterByCategory = (category) => {
    setPage(1);
    setFilterCategory(category);
  };

  const itemsCount = page * perPage;
  const currentItems = products.slice(itemsCount - perPage, itemsCount);

  const changePage = (n) => {
    setPage(n);
  };

  const deleteProduct = async (id) => {
    setSelectedProductId(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/products/${selectedProductId}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const archiveProduct = async (id) => {
    try {
      const productToArchive = products.find((product) => product.id === id);
      productToArchive.archived = "yes";
      productToArchive.archivedDate = moment().format(
        "MMMM Do YYYY, h:mm:ss a"
      );
      await axios.put(`http://localhost:3000/products/${id}`, productToArchive);
      fetchProducts();
      console.log(`Product with ID ${id} archived status updated.`);
    } catch (error) {
      console.error("Error updating archived status:", error);
    }
  };

  return (
    <div className="Products">
      {isLogin && (
        <div className="sorting-buttons">
          <button onClick={() => handleFilterByCategory(null)}>Show All</button>
          <button onClick={() => handleFilterByCategory("Sofa")}>Sofas</button>
          <button onClick={() => handleFilterByCategory("Bed")}>Beds</button>
          <button onClick={() => handleFilterByCategory("Table Set")}>
            Table Sets
          </button>
          <button onClick={() => handleFilterByCategory("Dresser")}>
            Dressers
          </button>
          <button onClick={() => handleFilterByCategory("Storage")}>
            Storages
          </button>
        </div>
      )}
      <div className={containerClass}>
        {currentItems.map((product) => (
          <div className="Products__box" key={product.id}>
            <Link className="img" to={`/products/${product.id}`}>
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
      <Modal
        isOpen={isModalOpen}
        handleClose={closeModal}
        handleConfirm={handleConfirmDelete}
      />
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
