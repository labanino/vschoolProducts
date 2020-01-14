import React from 'react';
import Product from './Product'
import productsData from "./vschoolProducts"
import './App.css';

function App() {
  const productComponents = productsData.map(item => <Product key={item.id} product={item}/>)

  return (
    <section>
      {productComponents}
    </section>
  )
}

export default App