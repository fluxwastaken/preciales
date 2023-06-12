import React, { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate, useParams } from 'react-router-dom';

function CartPage() {
  const [carts, setCarts] = useState([]);
  const { buyer_id } = useParams();

  useEffect(() => {
    getCartItems();
  }, []);

  const getCartItems = async () => {
    try {
      let response = await fetch(`http://localhost:8080/getCart/${buyer_id}`);
      let cartData = await response.json();
      setCarts(cartData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Cart Items</h1>
      <Row>
        {carts.map((cart) => (
          <Col key={cart.product_id}>
            <div>Buyer ID: {cart.buyer_id}</div>
            <div>Product ID: {cart.product_id}</div>
            <div>Quantity: {cart.quantity}</div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CartPage;
