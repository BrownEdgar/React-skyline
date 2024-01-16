import { Field, Form, Formik } from "formik";
import useRandom from "./Hooks/UseRandom";

const initialValues = {
  count: "",
  type: "",
  letterCase: "",
};

export default function App() {
  const random = useRandom(4, "number");
  const random2 = useRandom(10, "string", "upper");
  const random3 = useRandom(7, "string", "lower");

  console.log(random);
  console.log(random2);
  console.log(random3);

  const type = ["number", "string"];
  const letterCase = ["upper", "lower"];

  const handleSubmitRandom = (values) => {
    const result = useRandom(values.count, values.type, values.letterCase);
    console.log(result);
    console.log(values.count);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmitRandom}>
      <Form className="form">
        <div>
          <label htmlFor="name">Enter Count:</label>
          <Field type="number" id="count" name="count" required />
        </div>
        <div>
          <label htmlFor="name">Type:</label>
          <Field as="select" id="type" name="type" required>
            <option value="" disabled hidden>
              Select Type
            </option>
            {type.map((type) => (
              <option value={type} key={type}>
                {type}
              </option>
            ))}
          </Field>
          <div>
            <label htmlFor="name">Case:</label>
            <Field as="select" id="letterCase" name="letterCase">
              <option value="" disabled hidden>
                Select Case
              </option>
              {letterCase.map((cases) => (
                <option value={cases} key={cases}>
                  {cases}
                </option>
              ))}
            </Field>
          </div>
        </div>
        <button type="submit">Enter</button>
      </Form>
    </Formik>
  );
}
