// useRandom.jsx

import { useState, useEffect } from "react";

export default function useRandom(count, type, letterCase) {
  const [array, setArray] = useState([]);

  useEffect(() => {
    const randomElements = (type, letterCase) => {
      switch (type) {
        case "number":
          return Math.floor(Math.random() * 1000) + 1;
        case "string":
          let characters = "abcdefghijklmnopqrstuvwxyz";
          if (letterCase === "upper") {
            characters = characters.toUpperCase();
          }
          return characters.charAt(
            Math.floor(Math.random() * characters.length)
          );
        default:
          return null;
      }
    };

    const generatedArray = [];

    for (let i = 0; i < count; i++) {
      generatedArray.push(randomElements(type, letterCase));
    }
    setArray(generatedArray);
  }, [count, type, letterCase]);

  return array;
}
