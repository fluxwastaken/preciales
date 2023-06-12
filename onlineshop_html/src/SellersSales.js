import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SellersSales.css';
import NavBar2 from './components/NavBar2';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stock from './components/Stock';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function SellersSales() {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');

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

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = async(event) => {
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

  const [sales, setSales] = useState([]);

  useEffect(() => {
    getSales();
  }, []);

  const getSales = async () => {
    try {
      let response = await fetch('http://localhost:8080/getSales');
      let salesData = await response.json();
      setSales(salesData);
    } catch (error) {
      console.error(error);
    }
  };

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
              <button className="headerBtn">Sales</button>
              <button className="headerBtn">Stocks</button>
              {/* idk how to make this change depending on the username */}
              {/* <button className="headerBtn">username</button> */}
              <p className="username_display">username</p>
            </div>
          </div>
        </div>
      </header>

      <div className="bodyContainer">
        <h1 className="categoryTitle">Purchases</h1>
        <div className="tableContainer">
          <Table striped bordered>
            <thead>
              <tr>
                <th scope="col">USERNAME</th>
                <th scope="col">QUANTITY</th>
                <th scope="col">PRICE</th>
                <th scope="col">PRODUCT</th>
                <th scope="col">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sale) => (
                <tr key={sale.id}>
                  <td>{sale.username}</td>
                  <td>{sale.quantity}</td>
                  <td>{sale.price}</td>
                  <td>{sale.productName}</td>
                  <td>{sale.total}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      {/* <footer className="footer">
        <div className="footerContainer">
          <p>All rights reserved.</p>
        </div>
      </footer> */}

    </div>
  );
}

export default SellersSales;
