import React from 'react';
import './NavBar1.css';

function NavBar1() {
    return(
        <div className="header">
        <div className="headerContent">
          <p className="headerTitle">preciales</p>
          <div className="buttonContainer">
            <button className="headerBtn">Sign-up</button>
            <button className="headerBtn">Login</button>
          </div>
        </div>
      </div>
    );
}

export default NavBar1;
