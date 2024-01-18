// useRandom.js
import { useState } from "react";

export default function useRandom() {
  const [count, setCount] = useState();
  const [type, setType] = useState();
  const [letterCase, setLetterCase] = useState();

  const generateRandomElement = (type, letterCase) => {
    switch (type) {
      case "number":
        return Math.floor(Math.random() * 10);
      case "string":
        let characters = "abcdefghijklmnopqrstuvwxyz";
        if (letterCase === "upper") {
          characters = characters.toUpperCase();
        }
        return characters.charAt(Math.floor(Math.random() * characters.length));
      default:
        return null;
    }
  };

  const getRandom = () => {
    const generatedData = [];

    for (let i = 0; i < count; i++) {
      generatedData.push(generateRandomElement(type, letterCase));
    }

    return generatedData;
  };

  return { getRandom, setCount, setType, setLetterCase };
}
