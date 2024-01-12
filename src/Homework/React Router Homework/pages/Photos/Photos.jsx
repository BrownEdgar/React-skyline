import axios from "axios";

import "./Photos.scss";
import { Link, useLoaderData } from "react-router-dom";

export default function Photos() {
  const photos = useLoaderData();
  return (
    <div className="Photos">
      <h1>Photos</h1>

      <div className="Photos__container">
        {photos.map((photo) => (
          <Link
            to={`/photos/${photo.id}`}
            className="Photos__box"
            key={photo.id}
          >
            <img src={photo.url} alt={photo.title} />
            <h2>{photo.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
export const photosLoader = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/photos", {
    params: {
      _limit: 25,
    },
  });
  console.log(res.data);
  return res.data;
};
