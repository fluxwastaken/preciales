import React, { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './CartPage.css';
import Product from './components/Product';

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

  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const { buyer_email } = useParams();
  const [buyer, setBuyer] = useState({
    buyer_id: '',
    buyer_name: '',
    buyer_email: '',
    buyer_password: ''
  });
  const navigate = useNavigate();


  useEffect(() => {
    getProducts();
    getBuyerDetails();
  }, []);

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

  const getProducts = async () => {
    try {
      let response = await fetch('http://localhost:8080/getProducts');
      let productsData = await response.json();
      setProducts(productsData);
    } catch (error) {
      console.error(error);
    }
  };
 
  
  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    // Perform search logic or trigger a search API request using the searchValue
    console.log('Search submitted:', searchValue);

    try {
      let response = await fetch(`http://localhost:8080/searchProduct?keyword=${searchValue}`)
      let productsData = await response.json()
      setProducts(productsData)
    } catch (error) {
      console.error(error)
    }
  };

  const handleCartClick =()=>{
    console.log(buyer.buyer_id)
    navigate(`/viewCart/${buyer.buyer_id}`)
  }

  const handleLogoutClick=()=>{
    navigate('/home')
  }

  const handleProductsClick =()=>{
    navigate(`/home/loginBuyer=true/${buyer.buyer_email}`)
  }

  return (
    <div>

      <header>
        <div className="navbar">
          <div className="headerContent">
            <Row className="align-items-center">
              <Col xs={3} className="headerCol">
                <p className="headerTitle">preciales</p>
                <div className="buttonContainer_left">
                <button className="products"onClick={handleProductsClick}>Products</button>
                </div>
              </Col>

              <Col xs={5} className="headerCol">
                <div className="searchBarContainer">
                  <form onSubmit={handleSearchSubmit}>
                    <div className="searchInputContainer">
                      <input
                        type="text"
                        placeholder="What are you looking for?"
                        value={searchValue}
                        onChange={handleSearchInputChange}
                        className="searchInput"
                      />
                      <button type="submit" className="searchButton">
                        Search
                      </button>
                    </div>
                  </form>
                </div>
                </Col>
              <Col xs={3} className="headerCol">
                <div className="buttonContainer_right">
                  <button className="headerBtn" onClick={handleCartClick}>Shopping Cart</button>
                  <button className="headerBtn" onClick={handleLogoutClick}>Log-out</button>
                  <p className="username_display">{buyer.buyer_name}</p>
                  </div>
              </Col>
            </Row>
          </div>
        </div>
      </header>

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
