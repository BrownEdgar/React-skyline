import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchData(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios(url)
      .then((res) => setData(res.data))
      .catch((err) => setError(err));
  }, [url]);

  return [data, error];
}
