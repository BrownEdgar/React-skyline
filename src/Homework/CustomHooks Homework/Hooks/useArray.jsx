import { useState } from "react";

export default function useArray(array) {
  const [data, setData] = useState(array);

  const push = (number) => {
    setData((prevArray) => [...prevArray, number]);
  };

  const update = (index, number) => {
    setData((prevArray) =>
      prevArray.map((item, i) => (i === index ? number : item))
    );
  };

  const remove = (index) => {
    setData((prevArray) => prevArray.filter((_, i) => i !== index));
  };

  const filter = (condition) => {
    setData((prevArray) => prevArray.filter(condition));
  };
  const clear = () => {
    setData([]);
  };

  return { data, push, update, remove, filter, clear };
}
