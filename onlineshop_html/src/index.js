import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
// import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login1 from './Login1';
import Buyers from './BuyersPage';
import Signup from './Signup';
//npm install react-router-dom
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginBuyer from './LoginBuyer';
import BuyersPage from './BuyersPage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
       <Route path="" element= {<LoginBuyer></LoginBuyer>}></Route>
       <Route path='/buyers' element ={<Buyers></Buyers>}></Route>
       <Route path ='/newUser' element ={<Signup></Signup>}></Route>
       <Route path='/home/loginBuyer=true/:buyer_email' element = {<BuyersPage></BuyersPage>}></Route>
       {/* <Route path="/home" element= {<Login1></Login1>}></Route> */}
       <Route path="/loginUser" element = {<LoginBuyer></LoginBuyer>}></Route>

    </Routes>
  </BrowserRouter>
  // <React.StrictMode>
  //   {/* <Login1 /> */}
  //   {/* <Signup /> */}
  //   <Buyers />
  // </React.StrictMode>
);


