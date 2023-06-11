import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BuyersPage.css';
import NavBar2 from './NavBar2';
import productImage from './images/1.jpg'; // Import the image file

function BuyersPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      let response = await fetch('http://localhost:8080/getProducts');
      let productsData = await response.json();
      setProducts(productsData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <NavBar2 />
      <div id='productDiv'>
        {products.map((product) => (
          <div key={product.product_id} className='productItem'>
            <h3>{product.product_name}</h3>
            <p>Category: {product.category}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <img src={productImage} alt={product.product_name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuyersPage;
