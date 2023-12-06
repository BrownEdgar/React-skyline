import {useState} from 'react'
import './App.scss'



export default function App() {
    const [itms] = useState ([
        {
            id: 1,
            img: './images/Zara/sport1.jpg',
            title: "Lorem ipsum dolor sit",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, sit"
        },
        {
            id: 2,
            img: './images/Zara/sport2.jpg',
            title: "Lorem ipsum dolor sit",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, sit"
        },
        {
            id: 3,
            img: './images/Zara/sport3.jpg',
            title: "Lorem ipsum dolor sit",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, sit"
        }
    ])

  return (
    <div className='App'>
        {
            itms.map(elem =>{
                return (
                    <article className='App__item' key={elem.id}>
                        <img src={elem.img} alt={elem.title} />
                        <h3 className='App__title'>{elem.title}</h3>
                        <p className='App__desc'>{elem.desc}</p>
                        <a href="#" className='App__more'>Read more.</a>
                    </article>
                )
            })
        }
    </div>
  )
}
