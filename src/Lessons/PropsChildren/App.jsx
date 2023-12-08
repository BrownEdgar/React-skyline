import React from 'react'
import Child from './Child'

import './App.css'
import Modal from '../Modal/Modal'

export default function App() {
  return (
    <div>
      <h1>Props children example</h1>
      <Child theme="dark">
        <h2>Html content N1</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ut saepe minima rerum autem eius mollitia quaerat harum assumenda, in dolorum perferendis quod, eligendi error, facilis voluptatum molestiae aut aliquam.</p>
      </Child>
      <Child theme="light">
        <h2>Html content N2</h2>
        <ul>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
        </ul>
        <button>Read more</button>
      </Child>
      <Modal >
        <h3>Thanks for registration</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit quo, vitae unde, nam harum architecto aspernatur nulla ipsam distinctio quaerat, vero asperiores qui! Quaerat quae dolor, assumenda dolorem ab optio ullam amet dolorum maxime tempore, incidunt, aliquid ratione totam nobis?</p>
      </Modal>
    </div>
  )
}
