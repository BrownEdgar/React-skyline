import React, { useState, useEffect } from "react";
import "./Archived.scss";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { VscTriangleLeft } from "react-icons/vsc";
import Pagination from "../../Pagination/Pagination";
import { Link } from "react-router-dom";
import Modal from "../../Modal/Modal";

export default function Archived() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage] = useState(8);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const openModal = (id) => {
    setSelectedProductId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      fetchProducts();
      closeModal();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleConfirmDelete = () => {
    if (selectedProductId) {
      deleteProduct(selectedProductId);
    }
  };

  const archiveProduct = async (id) => {
    try {
      const productToArchive = products.find((product) => product.id === id);

      productToArchive.archived = "no";
      delete productToArchive.archivedDate;
      await axios.put(`http://localhost:3000/products/${id}`, productToArchive);
      fetchProducts();
      console.log(`Product with ID ${id} archived status updated.`);
    } catch (error) {
      console.error("Error updating archived status:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/products?archived=yes"
      );
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching archived products:", error);
    }
  };

  const itemsCount = page * perPage;
  const currentItems = products.slice(itemsCount - perPage, itemsCount);

  const changePage = (n) => {
    setPage(n);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="Archive">
      <div className="Archive__container">
        {products.length > 0 ? (
          currentItems.map((product) => (
            <div className="Archive__box" key={product.id}>
              <Link className="img" to={`/archive/${product.id}`}>
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
                  <p className="date">
                    Archived Date: <span> {product.archivedDate} </span>
                  </p>
                  <p className="price">{product.price + "$"}</p>
                  <div className="buttons">
                    <button
                      className="delete-button"
                      onClick={() => openModal(product.id)}
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
          ))
        ) : (
          <h3>No Archived Furniture</h3>
        )}
      </div>
      {products.length > perPage && currentItems.length > 0 && (
        <Pagination
          pages={perPage}
          total={products.length}
          changePage={changePage}
        />
      )}
      <Modal
        isOpen={isModalOpen}
        handleClose={closeModal}
        handleConfirm={handleConfirmDelete}
      />
    </div>
  );
}
