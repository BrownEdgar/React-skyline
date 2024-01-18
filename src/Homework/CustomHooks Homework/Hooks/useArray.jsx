import { useState } from "react";

export default function useArray(array) {
  const [data, setData] = useState(array);

  const push = () => {
    setData((prevArray) => [...prevArray, 7]);
  };

  const update = () => {
    setData((prevArray) => prevArray.map((array, i) => (i === 1 ? 9 : array)));
  };

  const remove = () => {
    setData((prevArray) => prevArray.filter((_, i) => i !== 1));
  };

  const filter = () => {
    setData((prevArray) => prevArray.filter((el) => el < 4));
  };
  const clear = () => {
    setData([]);
  };

  return { data, push, update, remove, filter, clear };
}
