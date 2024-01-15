import React, { useState } from "react";
import "./Product.scss";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import useFetchData from "../../../Hooks/CustomHook/useFetchData";
import axios from "axios";

export default function Product() {
  const { id } = useParams();
  const [data, error] = useFetchData(`http://localhost:3333/products/${id}`);
  const navigate = useNavigate();

  const [newImageUrl, setNewImageUrl] = useState("");

  const handleUrlChange = (e) => {
    const url = e.target.value;
    setNewImageUrl(url);
  };

  const urlChange = () => {
    axios
      .patch(`http://localhost:3333/products/${id}`, { image: newImageUrl })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3333/products/${id}`)
      .then(() => {
        navigate(-1);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  if (error) {
    return <pre>{JSON.stringify(error, null, 1)}</pre>;
  }

  return (
    <div className="Product">
      {data ? (
        <>
          <img src={data.image} alt={data.title} className="Product__image" />
          <div className="info">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <h3>price: {data.price}</h3>
            <h3>category: {data.category}</h3>

            <div className="Product__image-change-form">
              <label htmlFor="newImageUrl">Enter New Image URL:</label>
              <input
                type="text"
                id="newImageUrl"
                value={newImageUrl}
                onChange={handleUrlChange}
              />
              <button
                className="Product__change-image"
                onClick={urlChange}
                disabled={!newImageUrl}
              >
                Change Image
              </button>
            </div>

            <button className="Product__delete" onClick={handleDelete}>
              Delete
            </button>
            <button className="Product__back" onClick={() => navigate(-1)}>
              <IoArrowBackSharp />
              Go back
            </button>
          </div>
        </>
      ) : (
        <>
          <h2>Product not found</h2>
          <button className="Product__back" onClick={() => navigate(-1)}>
            <IoArrowBackSharp />
            Go back
          </button>
        </>
      )}
    </div>
  );
}
