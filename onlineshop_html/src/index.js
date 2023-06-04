import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
// import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login1 from './Login1';
import Signup from './Signup';
import Buyers from './BuyersPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login1 /> */}
    {/* <Signup /> */}
    <Buyers />
  </React.StrictMode>
);


