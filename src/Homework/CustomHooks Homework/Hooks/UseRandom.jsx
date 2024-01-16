// # Homework

// - ստեղծել սեփական (առանձին ֆայլով) `useRandom` customHook,որը պետք է մեզ վերադարձնի զանգված պատահական `number` || `string` էլեմենտներով՝ հետևյալ պայմաններով։ Ստանալու է 2 կամ 3 պարամետր,որոնցից առաջինը պատահական էլեմենտների քանակն, 2 -տիպը, 3- տառատեսակը։
// Օր․՝ `useRandom(4, 'number')` => պետք է վերադարձնի 4 պատահական թիվ 1-1000 միձակայքից։
// Օր․՝ `useRandom(4, 'string', "lower")` => պետք է վերադարձնի 4 պատահական լատինական փոքրատառ։
// Օր․՝ `useRandom(6, 'string', "upper")`=> պետք է վերադարձնի 6 պատահական լատինական Մեծատառ

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
          characters.length;
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
    setArray(generatedArray.join(", "));
  }, [count, type, letterCase]);

  return array;
}
