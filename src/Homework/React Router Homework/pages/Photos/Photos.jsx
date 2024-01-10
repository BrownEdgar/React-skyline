import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Photos.scss";

export default function Photos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/photos", {
      params: {
        _limit: 20,
      },
    }).then((res) => setPhotos(res.data));
  }, []);

  return (
    <div className="Photos">
      <h1>Photos</h1>
      <div className="Photos__container">
        {photos.map((photo) => (
          <div className="Photos__box" key={photo.id}>
            <img src={photo.url} alt={photo.title} />
            <h2>{photo.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
