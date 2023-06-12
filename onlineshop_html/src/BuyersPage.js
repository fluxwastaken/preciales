import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './BuyersPage.css';
import NavBar2 from './NavBar2';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './components/Product';


function BuyersPage() {
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
      const response = await fetch(`http://localhost:8080/searchBuyerEmail?keyword=${buyer_email}`);
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

  return (
    <div>
      <header>
        <div className="navbar">
          <div className="headerContent">
            <p className="headerTitle">preciales</p>
            <div className="buttonContainer_left">
              <button className="products">Products</button>
            </div>

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

            <div className="buttonContainer_right">
              <button className="headerBtn" onClick={handleCartClick}>Shopping Cart</button>
              {/* idk how to make this change depending on the username */}
              {/* <button className="headerBtn">username</button> */}
              <p className="username_display">{buyer.buyer_name}</p>
            </div>
          </div>
        </div>
      </header>


      <div id='productDiv'>
        <h1 className = "categoryTitle">All products</h1>
        <Row>
          {products.map((product) => (
            <Col key={product.product_id} sm={6} md={4} lg={3} className="mb-3 product-column">
              <Product product={product} buyer_id={buyer.buyer_id} product_id={product.product_id}></Product>
            </Col>
          ))}
        </Row>
      </div>

      <footer>
        <div className="footerContainer">
          <p>All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default BuyersPage;
