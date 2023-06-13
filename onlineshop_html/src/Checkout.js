
import React from 'react';
import './Checkout.css';
import NavBar1 from './components/NavBar1';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function Checkout(){

    return(
        
<div class="main-container">

<div id="header-container"> 
<NavBar1 />
</div>

<div id="body1-container"> 
<MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>Product</th>
          <th scope='col'>Price</th>
          <th scope='col'>Quantity</th>
          <th scope='col'T>Total</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row'>1</th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td></td>
          <td></td>
        </tr>
      </MDBTableBody>
    </MDBTable>
 
</div>

<div id='body2-container'>
<div id="btn-co-1">
            <button>Checkout</button>
            <label>Total:</label>
            <label>placeholder</label>
            <label>PHP</label>
          </div>

</div>


</div>
    );
}

export default Checkout;