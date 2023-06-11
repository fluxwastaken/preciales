import React, { useState } from 'react';
import './BuyersPage_copy.css';
import imageSrc from './landing page/landing-1.png';

function Buyers1() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform search logic or trigger a search API request using the searchValue
    console.log('Search submitted:', searchValue);
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
              <button className="headerBtn">Shopping Cart</button>
              {/* idk how to make this change depending on the username */}
              {/* <button className="headerBtn">username</button> */}
              <p className="username_display">username</p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className = "body">
          <div className = "headerBody">
            <img src={imageSrc} alt="Image" className="imageContainer"/>
            <h1 className="productTitle">All products</h1>
          </div>


        </div>
      </main>
    </div>
  );
}

export default Buyers1;
