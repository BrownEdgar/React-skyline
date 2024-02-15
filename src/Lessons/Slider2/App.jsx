import React, { useState, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";

import Slider from "react-slick";

import './App.scss'


const animals = [
  {
    id: 1,
    image: 'https://cdn.pixabay.com/photo/2017/05/19/18/51/lion-2327225_1280.jpg',
    name: 'Lion'
  },
  {
    id: 2,
    image: 'https://cdn.pixabay.com/photo/2020/08/27/15/05/leopard-5522230_1280.jpg',
    name: 'Leopard'
  },
  {
    id: 3,
    image: 'https://cdn.pixabay.com/photo/2017/08/08/14/32/adler-2611528_1280.jpg',
    name: 'Eagle'
  },
  {
    id: 4,
    image: 'https://cdn.pixabay.com/photo/2016/11/14/03/22/elephant-1822481_1280.jpg',
    name: 'Elephant'
  },
  {
    id: 5,
    image: 'https://cdn.pixabay.com/photo/2013/11/08/13/02/whale-shark-207401_1280.jpg',
    name: 'Shark'
  },
]

export default function App() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: false,
    arrows: true,
    pauseOnHover: false,
    autoplaySpeed: 3000,
    nextArrow: <div>
      <button>
        <FaArrowRight />
      </button>
    </div>
  }

  return (
    <div className='App'>
      <Slider {...settings}>
        {animals.map(elem => {
          return (
            <div className="slick-item" key={elem.id}>
              <h2>{elem.name}</h2>
              <img src={elem.image} alt={elem.name} />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
