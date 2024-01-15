import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchData(url) {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => setErr(err));
  }, [url]);
  return [data, err];
}
