import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './CartItem.css';

function CartItem(props) {
  const { cart } = props;
  const [buttonText, setButtonText] = useState('Delete Product');
  const [stockValue, setStockValue] = useState('');

  const handleAddToCart = () => {
    setButtonText('Deleted');

    setTimeout(() => {
      setButtonText('Delete Product');
    }, 400); // Revert to 'Delete Product' after 2 seconds (adjust the delay as needed)
  };

  const handleStockChange = (event) => {
    setStockValue(event.target.value);
  };

  const handleAddStock = () => {
    console.log('Stock added:', stockValue);
    setStockValue(''); // Clear the input field after adding stock
  };

  return (
    <div className="product-container">
      <Card className="product-card">
        {/* <Card.Img src={cart.picture} alt={cart.product_name} className='product-card-image' /> */}
        <Card.Body>
          <div className = "stockContext">
            <Card.Title className="product-card-title">Buyer ID: {cart.buyer_id}</Card.Title>
            <Card.Title className="product-card-title">Product ID: {cart.product_id}</Card.Title>
            <Card.Title className="product-card-title">{cart.quantity}</Card.Title>
          </div>
          

          <Button className="product-card-button" onClick={handleAddToCart}>{buttonText}</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CartItem;
