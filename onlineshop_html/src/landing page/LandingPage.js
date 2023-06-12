import './LandingPage.css';


function LandingPage(){

return(

    <div class="main-container">

<div id="header-container"> 
    {/* <!-- <div id="button-header">
        <button id="btn-home">Home</button>
        <button id="btn-signup">Sign up</button>
        <button id="btn-login">Login</button>
    </div> --> */}
</div>

<div id="image-container">
    {/* <!-- <img id="lp-1" src="landing-1.png" width="100%"> --> */}
    <div id="lp-1">
        <div id="btn-lp-1">
            <button>Shop Now</button>
        </div>
    
    </div>
</div>


<div class="body1-container"> 
        <div id="img-circle">
            <img id="lp-2" src="landing-2.png" height="400" width="400"></img>
        </div>
        <div id="body1-txt">
            <p id="body1-txt1"> Lorem ipsum</p>
            <p id="body1-txt2">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit
                <br>Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit sed </br>
                <br>do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua.</br>
                <br>Ut enim ad minim veniam, quis nostrud exercitation</br>
            </p>
       </div>
</div>
<div class="body2-container"> 
    <div id="brownsqr-container">
        <div id="brownsqr"></div>
    </div>
    <div id="body2-img">
        <img src="landing-3.png" height="400" width="400"></img>
    </div>
  

</div>
<div id="body3-container" > 

    <div id="column">
        <h2>Preciales</h2>
        
        <p>Lorem ipsum dolor sit amet, 
            <br>consectetur adipiscing elit</br></p>
       
      </div>
      <div id="column" >
        <h2 >Lorem</h2>
        <p>Lorem ipsum dolor sit amet, 
            <br>consectetur adipiscing elit</br></p>
            <br></br>
            <p>Lorem ipsum dolor sit amet, 
                <br>consectetur adipiscing elit</br></p>
      </div>
      <div id="column">
        <h2>Contact Us</h2>
        <p>This should be an address
        <br> Lorem ipsum dolor</br></p>
        <br></br>
        <p>brand@testing.com
        <br>8888-1234</br></p>
      </div>




</div>
<div id="footer-container"> 
    <p id="footer-txt1">Copyright © 2023 Preciales Store All rights reserved</p>
</div>

</div>
);
}



export default LandingPage;
