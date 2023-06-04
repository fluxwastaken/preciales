import React, { useState, useEffect } from 'react';
import './Login1.css';
import NavBar1 from './NavBar1';

function Signup() {
  // this is for making it unscrollable
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // field for answering
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [buyerButtonText, setBuyerButtonText] = useState('BUYER');
  const [sellerButtonText, setSellerButtonText] = useState('SELLER');

  const handleChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  //making buyer into login when mouseover
  useEffect(() => {
    const buyerButton = document.getElementById('buyer');
    buyerButton.addEventListener('mouseover', () => {
      setBuyerButtonText('LOGIN');
    });
    buyerButton.addEventListener('mouseout', () => {
      setBuyerButtonText('BUYER');
    });

    return () => {
      buyerButton.removeEventListener('mouseover', () => {
        setBuyerButtonText('LOGIN');
      });
      buyerButton.removeEventListener('mouseout', () => {
        setBuyerButtonText('BUYER');
      });
    };
  }, []);

  //making seller into login when mouseover
  useEffect(() => {
    const sellerButton = document.getElementById('seller');
    sellerButton.addEventListener('mouseover', () => {
      setSellerButtonText('LOGIN');
    });
    sellerButton.addEventListener('mouseout', () => {
      setSellerButtonText('SELLER');
    });

    return () => {
      sellerButton.removeEventListener('mouseover', () => {
        setSellerButtonText('LOGIN');
      });
      sellerButton.removeEventListener('mouseout', () => {
        setSellerButtonText('SELLER');
      });
    };
  }, []);

  return (
    <div>
      <div className="header">
        <NavBar1/>
      </div>

      <div className="body">
        <div className="welcome-container">
          <p className="welcome">welcome back, gorgeous!</p>
        </div>

        <div className="tableContainer">
          <table className="table">
            <tbody>
              <tr>
                <td className="cell_left">username*</td>
                <td className="cell_right">
                  <input
                    className="username_input"
                    type="text"
                    value={inputValue1}
                    onChange={handleChange1}
                  />
                </td>
              </tr>
              <tr>
                <td className="cell_left">password*</td>
                <td className="cell_right">
                  <input
                    className="password_input"
                    type="text"
                    value={inputValue2}
                    onChange={handleChange2}
                  />
                </td>
              </tr>
              {/* Add more <tr> elements for additional rows */}
            </tbody>
          </table>
        </div>

        <div className="buttonRow">
          <button id="buyer" className="buyer">{buyerButtonText}</button>
          <button id="seller" className="seller">{sellerButtonText}</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
