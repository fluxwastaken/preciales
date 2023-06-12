import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buyers from './BuyersPage';
import Signup from './Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginBuyer from './LoginBuyer';
import BuyersPage from './BuyersPage';
import SellersStock from './SellersStock';
import CartPage from './CartPage';
import LandingPage from './landing page/LandingPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
       <Route path="/home" element= {<LandingPage></LandingPage>}></Route>
       <Route path='/buyers' element ={<Buyers></Buyers>}></Route>
       <Route path ='/newUser' element ={<Signup></Signup>}></Route>
       <Route path='/home/loginBuyer=true/:buyer_email' element = {<BuyersPage></BuyersPage>}></Route>
       <Route path='/home/loginSeller=true/:seller_email' element = {<SellersStock></SellersStock>}></Route>
       {/* <Route path="/home" element= {<Login1></Login1>}></Route> */}
       <Route path="/loginUser" element = {<LoginBuyer></LoginBuyer>}></Route>
       <Route path="viewCart/:buyer_id" element={<CartPage></CartPage>}></Route>

    </Routes>
  </BrowserRouter>
  // <React.StrictMode>
  //   {/* <Login1 /> */}
  //   {/* <Signup /> */}
  //   <Buyers />
  // </React.StrictMode>
);


