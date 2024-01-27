import React, { useEffect, useState } from "react";
import "./Archive.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import ROUTES from "../../routes";

export default function Archive() {
  const { archiveID } = useParams();
  const [product, setProduct] = useState({});
  console.log(archiveID);

  useEffect(() => {
    if (archiveID) {
      axios
        .get(`http://localhost:3000/archive/${archiveID}`)
        .then((res) => setProduct(res.data));
    }
  }, [archiveID]);

  return (
    <div className="Archives">
      <div className="Archives__box">
        <img className="product-img" src={product.img} alt={product.name} />
        <Link className="go-back" to={"/" + ROUTES.ARCHIVE}>
          <IoArrowBackCircleSharp />
        </Link>
        <Link className="edit" to={`/${ROUTES.EDIT}/${archiveID}`}>
          Edit
        </Link>

        <div className="info">
          <div className="title">
            <p>Brand:</p>
            <p>Name:</p>
            <p>Category:</p>
            <p>Price:</p>
          </div>
          <div className="desc">
            <p>{product.brand}</p>
            <p>{product.name}</p>
            <p>{product.category}</p>
            <i>
              <p>{`${product.price}$`}</p>
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}
