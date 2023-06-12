import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Product.css';

function Product(props) {
  const { product,buyer_id,product_id} = props;

  const [carts, setCarts] = useState({
  buyer_id:buyer_id,
  product_id:product_id,
  quantity:1
  }); 

  const [buttonText, setButtonText] = useState('Add to Cart');

  const handleAddToCart = () => {
    setButtonText('Added');

    setTimeout(() => {
      setButtonText('Add to Cart');
    }, 400); // Revert to 'Add to Cart' after 2 seconds (adjust the delay as needed)

    // Make the API call or perform any other desired action
    fetch('http://localhost:8080/addCartProduct', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(carts)
    })
      .then(response => {
        console.log("Valid Add to Cart")
      })
      .catch(error => {
        console.log("Error Adding to Cart")
      });
  };

  return (
    <div className="product-container">
      <Card className="product-card">
        <Card.Img src={product.picture} alt={product.product_name} className='product-card-image' />
        <Card.Body>
          <Card.Title className="product-card-title">{product.product_name}</Card.Title>
          <Card.Text className="product-card-text price">Price: PHP {product.price}</Card.Text>
          <Card.Text className="product-card-text">Category: {product.category}</Card.Text>
          <Card.Text className="product-card-text">Quantity: {product.quantity}</Card.Text>
          <Card.Text className="product-card-text">Description: {product.description}</Card.Text>
          <Button className="product-card-button" onClick={handleAddToCart}>{buttonText}</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
