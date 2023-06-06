import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
// import Login from './Login';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Login1 from './Login1';
import Signup from './Signup';
import Buyers from './BuyersPage';
import AddBuyer from './AddBuyer';
//npm install react-router-dom
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginBuyer from './LoginBuyer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
       <Route path="" element= {<Login1></Login1>}></Route>
       <Route path='/home/loginBuyer=true/:buyer_id' element = {<Login1></Login1>}></Route>
       {/* <Route path="/home" element= {<Login1></Login1>}></Route> */}
       <Route path="/loginBuyer" element = {<LoginBuyer></LoginBuyer>}></Route>
       <Route path='/buyers' element ={<Buyers></Buyers>}></Route>
       <Route path ='/buyers/new' element ={<AddBuyer></AddBuyer>}></Route>
    </Routes>
  </BrowserRouter>
  // <React.StrictMode>
  //   {/* <Login1 /> */}
  //   {/* <Signup /> */}
  //   <Buyers />
  // </React.StrictMode>
);


