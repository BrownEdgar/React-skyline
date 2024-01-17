import { Field, Form, Formik } from "formik";
import useRandom from "./Hooks/UseRandom";
import { useEffect, useState } from "react";
import useArray from "./Hooks/useArray";
import "./App.scss";

// const initialValues = {
//   count: "",
//   type: "",
//   letterCase: "",
// };

export default function App() {
  const random = useRandom(4, "number");
  const random2 = useRandom(10, "string", "upper");
  const random3 = useRandom(7, "string", "lower");

  // console.log(random);
  // console.log(random2);
  // console.log(random3);

  const { data, push, update, remove, filter, clear } = useArray([
    1, 2, 3, 4, 5, 6,
  ]);
  const addClick = () => {
    push(7);
  };
  const updateClick = () => {
    update(1, 9);
  };
  const removeClick = () => {
    remove(1);
  };
  const filterClick = () => {
    filter((n) => n < 3);
  };
  const clearClick = () => {
    clear();
  };

  return (
    <div>
      <button onClick={addClick}>Add 7</button>
      <button onClick={updateClick}>Change Second Element To 9</button>
      <button onClick={removeClick}>Remove Second Element</button>
      <button onClick={filterClick}>Keep Numbers Less Than 4</button>
      <button onClick={clearClick}>Clear</button>
      <h1>{data}</h1>
    </div>
  );

  // const [data, setData] = useState([]);
  // const type = ["number", "string"];
  // const letterCase = ["upper", "lower"];

  // const handleSubmitRandom = (values) => {
  //   setData(useRandom(values.count, values.type, values.letterCase));
  //   console.log(data);
  //   console.log(values.count);
  // };

  // return (
  //   <Formik initialValues={initialValues} onSubmit={handleSubmitRandom}>
  //     <Form className="form">
  //       <div>
  //         <label htmlFor="count">Enter Count:</label>
  //         <Field type="number" id="count" name="count" required />
  //       </div>
  //       <div>
  //         <label htmlFor="type">Type:</label>
  //         <Field as="select" id="type" name="type" required>
  //           <option value="" disabled hidden>
  //             Select Type
  //           </option>
  //           {type.map((type) => (
  //             <option value={type} key={type}>
  //               {type}
  //             </option>
  //           ))}
  //         </Field>
  //         <div>
  //           <label htmlFor="letterCase">Case:</label>
  //           <Field as="select" id="letterCase" name="letterCase">
  //             <option value="" disabled hidden>
  //               Select Case
  //             </option>
  //             {letterCase.map((cases) => (
  //               <option value={cases} key={cases}>
  //                 {cases}
  //               </option>
  //             ))}
  //           </Field>
  //         </div>
  //       </div>
  //       <button type="submit">Enter</button>
  //       <div>{data.join(", ")}</div>
  //     </Form>
  //   </Formik>
  // );
}
