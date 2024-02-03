import { useSelector } from "react-redux";
import "./App.css";

export default function App() {
  const state = useSelector((state) => state);
  return (
    <div>
      <h2>Hello World</h2>
      {console.log(state)}
    </div>
  );
}
