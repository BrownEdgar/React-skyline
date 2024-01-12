import React, { useEffect, useState } from "react";
import "./Photo.scss";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Error from "../Error/Error";
import ROUTES from "../../routes";

export default function Photo() {
  const { photoId } = useParams();
  const [photo, setPhoto] = useState({});

  useEffect(() => {
    if (photoId > 0 && photoId <= 25) {
      axios
        .get(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
        .then((res) => setPhoto(res.data));
    }
  }, [photoId]);

  console.log(photo);

  return (
    <div className="Photo">
      {photo ? (
        <div className="Photo__box">
          <Link to={"/" + ROUTES.PHOTOS}>
            <IoReturnUpBackOutline className="icon" />
          </Link>
          <img src={photo.url} alt="" />
          <h2>{photo.title}</h2>
        </div>
      ) : (
        <>
          <Error />
        </>
      )}
    </div>
  );
}
