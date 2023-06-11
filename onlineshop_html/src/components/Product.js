import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Product.css';

function Product(props) {
  const { product } = props;
  const [buttonText, setButtonText] = useState('Add to Cart');

  const handleAddToCart = () => {
    setButtonText('Added');

    setTimeout(() => {
      setButtonText('Add to Cart');
    }, 400); // Revert to 'Add to Cart' after 2 seconds (adjust the delay as needed)
  };

  return (
    <div className="product-container">
      <Card className="product-card">
        <Card.Img src={product.picture} alt={product.product_name} className='product-card-image' />
        <Card.Body>
          <Card.Title className="product-card-title">{product.product_name}</Card.Title>
          <Card.Text className="product-card-text">Price: {product.price}</Card.Text>
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
