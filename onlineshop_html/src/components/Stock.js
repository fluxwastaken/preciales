import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Stock.css';

function Product(props) {
  const { product } = props;
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
    window.open(`/editStock/${product.product_id}`, 'Add Stock', 'width=600,height=400');
  };

  return (
    <div className="product-container">
      <Card className="product-card-stock">
        <Card.Img src={product.picture} alt={product.product_name} className='product-card-image' />
        <Card.Body>
          <div className = "stockContext">
          <Card.Title className="product-card-title">{product.product_name}</Card.Title>
          <Card.Text className="product-card-text qty">Quantity: {product.quantity}</Card.Text>
          <Card.Text className="product-card-text php">PHP {product.price}</Card.Text>
          <Card.Text className="product-card-text cat">Category: {product.category}</Card.Text>
          <Card.Text className="product-card-text descript">{product.description}</Card.Text>
          </div>
          
          <div className="stock-input-container">
            {/* <input
              type="number"
              value={stockValue}
              onChange={handleStockChange}
              className="stock-input"
              placeholder="Quantity"
            /> */}
            <Button className="edit-stock-button1" onClick={handleAddStock}>Edit Product</Button>
            <Button className="product-card-delete" onClick={handleAddToCart}>{buttonText}</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
