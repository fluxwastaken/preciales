import React from 'react';
import './NavBar1.css';
import { useNavigate } from 'react-router-dom';

function NavBar1() {
  const navigate = useNavigate();

  const handleLoginClick = (e) =>{
    navigate('/loginUser')
  }

  const handleSignupClick =(e)=>{
    navigate('/newUser')
  }
    return(
      <header>
      <div className="navbar">
          <div className="headerContent">
                <p className="headTitle">preciales</p>
                <div className="buttonContainer_left">
                <button className="productsBtn"onClick={handleProductsClick}>Products</button>
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
                  <button className="headerBtn" onClick={handleLogoutClick}>Log-out</button>
                  <p className="usernameDisplay">{buyer.buyer_name}</p>
                </div>

          </div>
        </div>
      </header>


    );
}

export default NavBar1;
