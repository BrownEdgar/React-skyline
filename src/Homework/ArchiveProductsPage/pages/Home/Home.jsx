import React, { useState } from "react";
import "./Home.scss";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?cs=srgb&dl=pexels-pixabay-271816.jpg&fm=jpg",
    "https://wallpapers.com/images/featured/couch-gluflbu0o9q32mow.jpg",
    "https://smartwoodfurniture.com/wp-content/uploads/2023/07/sparklebed.jpg",
  ];

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
  };

  return (
    <div className="Home">
      <div className="slider">
        <div
          className="slides"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index + 1}`} />
          ))}
        </div>
        <button className="prev" onClick={prevImage}>
          &#10094;
        </button>
        <button className="next" onClick={nextImage}>
          &#10095;
        </button>
      </div>
    </div>
  );
}
