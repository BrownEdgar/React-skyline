import React, { useState, useEffect } from 'react';


import Slider from "react-slick";

import './App.scss'
import axios from 'axios';

export default function App() {

  const [posts, setPosts] = useState([])
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  };
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/posts?_limit=12')
      .then(res => setPosts(res.data))
  }, [])

  return (
    <div className='App'>
      <Slider {...settings}>
        {posts.map(elem => {
          return (
            <div className="slick-item" key={elem.id}>
              <h2>{elem.title}</h2>
              <p>{elem.body}</p>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
