import { useState } from "react";
import "./Select.scss";
export default function Select() {
  const [car, setCar] = useState('')
  const handChange = (e) => {
    const { value } = e.target;
    setCar(value)
    
  }


  

const img =
  car === "BMW"
    ? "https://img.goodfon.ru/original/1920x1204/c/75/bmv-avtomobil-doroga-les.jpg"
    : car === "Lamborgini"
    ? "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    : car === "Ferrari"
    ? "https://w.forfun.com/fetch/7d/7da7874714f6851b2622e741384ad280.jpeg"
    : car === "Mercedes"
    ? "https://img3.akspic.ru/attachments/crops/3/6/2/4/34263/34263-avtomobilnye_shiny-mercedes_benz_s_class-semejnyj_avtomobil-tyuning_avtomobilej-avtomobil-2560x1440.jpg"
    : "https://i.pinimg.com/originals/2e/cd/b7/2ecdb7c1f10931f6759327ca34cfb604.jpg";

    
  return (
    <div className="main" style={{ backgroundImage: `url(${img})` }}>
      <header>
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contacts</a>
            </li>
            <li>
              <select name="cars" id="cars" onChange={handChange}>
                <option value="" selected disabled>
                  Select cars...
                </option>
                <option value="Ferrari">Ferrari</option>
                <option value="Lamborgini">Lamborgini</option>
                <option value="Mercedes">Mercedes</option>
                <option value="BMW">BMW</option>
              </select>
            </li>
          </ul>
        </nav>
        <p>
          <span>{car.length > 1 ? car : "Cars"}</span> is Lorem ipsum dolor sit amet consectetur adipisicing elit. {" "}</p>
      </header>
    </div>
  );
}


