import axios from "axios";
import { useEffect, useState, useTransition } from "react";
import filteredData from "../../helpers/filteredData";

const DB_URL = import.meta.env.VITE_DB_URL;

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isPending, startTransition] = useTransition();
  const [id, setId] = useState(null);

  useEffect(() => {
    axios(DB_URL).then((res) => setPhotos(res.data));
  }, []);

  // 50ms 100ms
  const handleChange = (e) => {
    if (id) {
      clearTimeout(id);
    }

    const sto = setTimeout(() => {
      startTransition(() => setSearchValue(e.target.value.toLowerCase()));
    }, 200);
    setId(sto);
  };

  return (
    <div className="App">
      <form>
        <h3>you search : {searchValue} </h3>
        <input type="search" placeholder="search" onChange={handleChange} />
      </form>
      <div className="Photos">
        {isPending ? (
          <h1>Loading...</h1>
        ) : (
          filteredData(searchValue, photos).map((elem) => (
            <h2 key={elem.id}>{elem.title}</h2>
          ))
        )}
      </div>
    </div>
  );
}
