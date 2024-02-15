import { useState } from "react";
import "./App.scss";

export default function App() {
  const [boxColor, setBoxColor] = useState("");

  const handleColorChange = (color) => {
    setBoxColor(color);
  };

  return (
    <div className="App">
      <p className="button-name">Button name {boxColor}</p>
      <div className="buttons-container">
        <button
          className="button-yellow"
          onMouseEnter={() => handleColorChange("yellow")}
          onMouseLeave={() => setBoxColor("")}
        >
          Yellow
        </button>
        <button
          className="button-blue"
          onMouseEnter={() => handleColorChange("blue")}
          onMouseLeave={() => setBoxColor("")}
        >
          Blue
        </button>
        <button
          className="button-black"
          onMouseEnter={() => handleColorChange("black")}
          onMouseLeave={() => setBoxColor("")}
        >
          Black
        </button>
      </div>
      <div className={`App__box ${boxColor ? `box-${boxColor}` : ""}`}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing
        </p>
      </div>
    </div>
  );
}
