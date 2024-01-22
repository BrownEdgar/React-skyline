import React from 'react'
import "./App.scss"
export default function App() {
    const title = 'ti';
    const cat = 'man'
    return (
      <div>
        <div className={title + " " + cat}>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/96518215-a351-48c9-8bf7-3ab66aec30ff/dunk-low-big-kids-shoes-tT2Km0.png"
            alt=""
                />
                <div className='item_description'></div>
        </div>
      </div>
    );
}
