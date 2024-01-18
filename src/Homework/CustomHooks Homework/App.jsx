import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import useArray from "./Hooks/useArray";
import "./App.scss";
import useRandom from "./Hooks/UseRandom";

// export default function App() {
//   const [count, setCount] = useState(5);
//   const [type, setType] = useState("string");
//   const [letterCase, setLetterCase] = useState("");
//   const [generatedData, setGeneratedData] = useState([]);
//   const {
//     getRandom,
//     setCount: setRandomCount,
//     setType: setRandomType,
//     setLetterCase: setRandomLetterCase,
//   } = useRandom();

//   useEffect(() => {
//     setRandomCount(count);
//     setRandomType(type);
//     setRandomLetterCase(letterCase);
//   }, [count, type, letterCase]);

//   const getData = () => {
//     const data = getRandom();
//     setGeneratedData(data);
//   };

//   return (
//     <div>
//       <div className="form">
//         <div>
//           <label htmlFor="count">Enter Count:</label>
//           <input
//             type="number"
//             value={count}
//             onChange={(e) => setCount(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="type">Enter Type:</label>
//           <input
//             type="text"
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="letterCase">Enter Case:</label>
//           <input
//             type="text"
//             id="letterCase"
//             value={letterCase}
//             onChange={(e) => setLetterCase(e.target.value)}
//           />
//         </div>
//         <button onClick={getData}>Generate Random Data</button>
//       </div>
//       <div>
//         <h1>Generated Data: {generatedData.join(", ")}</h1>
//       </div>
//     </div>
//   );
// }

export default function App() {
  const { data, push, update, remove, filter, clear } = useArray([
    1, 2, 3, 4, 5, 6,
  ]);

  return (
    <div>
      <div className="form">
        <button onClick={push}>Add 7</button>
        <button onClick={update}>Change Second Element To 9</button>
        <button onClick={remove}>Remove Second Element</button>
        <button onClick={filter}>Keep Numbers Less Than 4</button>
        <button onClick={clear}>Clear</button>
      </div>
      <h1 className="numbers">{data}</h1>
    </div>
  );
}
