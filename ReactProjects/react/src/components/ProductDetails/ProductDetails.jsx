import { useState, useEffect } from "react";

import React from 'react'

const ProductDetails = () => {

  const [products, setProducts] = useState([]);
  const apiUrl = "https://fakestoreapi.com/products";

  useEffect(() => {
    const getDetails = async () => {

      const response = await fetch(apiUrl);
      const data = await response.json();
    //   console.log(data);
      setProducts(data);
      
    }
    getDetails()
  }, [])

  return (
    <ul>
      {products.map(item => (
        <li key={item.id}>
          <h1>{item.title}</h1>
          <img src={item.image} alt="" />
        </li>

      ))}
    </ul>
  )


}
export default ProductDetails 
