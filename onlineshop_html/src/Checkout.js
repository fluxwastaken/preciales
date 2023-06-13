
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import './Checkout.css';
import NavBar1 from './components/NavBar1';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Table from 'react-bootstrap/Table';

function Checkout(){
  const navigate = useNavigate();
  const [carts, setCarts] = useState([]);
  const { buyer_id } = useParams();
  const [buyer, setBuyer] = useState({
    buyer_id: '',
    buyer_name: '',
    buyer_email: '',
    buyer_password: ''
  });

  useEffect(() => {
    getBuyerDetails()
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
  const getBuyerDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8080/getBuyerInfo/${buyer_id}`);
      const buyerData = await response.json();
      if (buyerData) {
        setBuyer(buyerData);
      }
    } catch (error) {
      console.log(error);
    }

    
  };


    return(
      
<div class="mainco-container">

<div id="headerco-container"> 
<NavBar1 />
</div>

<div id="body1co-container"> 
<Table striped bordered >
            <thead>
              <tr>
                <th id="title-table" scope="col">Product</th>
                <th  id="title-table"scope="col">Price</th>
                <th  id="title-table" scope="col">Quantity</th>
                <th  id="title-table" scope="col">Total</th>
              </tr>
            </thead>
            <tbody id="body-table">
            {carts.map((cart) => (
                <tr key={cart.cart_id}>
                  <td>{cart.product_name}</td>
                  <td>{cart.price}</td>
                  <td>{cart.quantity}</td>
                  <td>{cart.price * cart.quantity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div id="co-1">
            <button>Checkout</button>
            </div>
 
</div>

<div id='body2-container'>
            <label>Total:</label>
            <label>placeholder</label>
            <label>PHP</label>


</div>

<div id="footer-container">
              <p id="footer-txt1">
                Copyright © 2023 Preciales Store All rights reserved
              </p>
              </div>
</div>
    );
}

export default Checkout;