import "./App.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllHouses, isAllHousesMustByShow, showAll } from "./features/housesSlice/housesSlice";

export default function App() {
  const houses = useSelector(getAllHouses);
  const showAllHouses = useSelector(isAllHousesMustByShow);
  const dispatch = useDispatch();

  const toggleShowAllHouses = () => {
    dispatch(showAll());
  };

  const displayedHouses = showAllHouses ? houses : houses.slice(0, 6);

  return (
    <div className="App">
      <div className="App__container">
        {displayedHouses.map((house) => (
          <div className="box" key={house.id}>
            <div className="img-box">
              <img src={house.image} alt={house.title} />
            </div>
            <div className="info-box">
              <h2>{house.title}</h2>
              <div className="house-info">
                <p> {house.beds} Beds</p>
                <p> {house.baths} Baths</p>
                <p> {house.sq_area} Sq Ft</p>
              </div>

              <p className="price">${house.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      {houses.length > 6 && (
        <button onClick={toggleShowAllHouses}>
          {showAllHouses ? "View Less" : "View All "}
        </button>
      )}
    </div>
  );
}
