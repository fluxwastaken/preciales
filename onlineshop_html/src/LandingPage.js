import './LandingPage.css';
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import landing2Image from './landing page/landing-2.png';
import landing4Image from './landing page/landing-4.png';
import NavBar1 from './components/NavBar1';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



function useScrollAnimation(ref) {
  useEffect(() => {
    const element = ref.current;
    if (element) {
      gsap.from(element, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  }, [ref]);
}

function LandingPage() {
  const navigate = useNavigate();

  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);
  
  useScrollAnimation(scrollRef1);
  useScrollAnimation(scrollRef2);
  useScrollAnimation(scrollRef3);

  const handleShopClick = () => {
    navigate('/loginUser');
  };

   return (
    <div className="mainlp-container">
      <div id="headerlp-container">
      <NavBar1 />
      </div>

      <div id="imagelp-container">
        <div id="lp-1">
          <div id="btn-lp-1">
            <button onClick={handleShopClick}>order now</button>
          </div>
        </div>
      </div>

      <div className="body1lp-container">
        <div id="imglp-circle">
          <img id="lp-2" src={landing2Image} height="400" width="400" alt="Landing 2" />
        </div>
        <div id="body1lp-txt">
          <p id="body1lp-txt1">Fiesta in every bite!</p>
          <p id="body1lp-txt2">
            Welcome to "Taste of Mexico," your go-to for authentic Mexican flavors.
            <br />
            {/* <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
            <br /> */}
            <br />
            At Taste of Mexico, we bring you  the vibrant flavors of Mexico  with  just  a
            <br />
            few clicks. Our offerings include a wide variety of dishes prepared by local and international chefs,
            ensuring you get the best options to satisfy your
            <br />cravings for fresh and delicious Mexican food.
          </p>
        </div>
      </div>
      <div className="body2lp-container">
        <div id="brownsqrlp-container">
          <div id="brownsqrlp"><p id="textBrownSqrlp">keeping the flavors real</p></div>
        </div>
        <div id="body2lp-img">
          <img src={landing4Image} height="400" width="400" alt="Landing 4" />
        </div>
      </div>
      <div id="body3lp-container">
        <div id="column"  ref={scrollRef1}>
          <h2>Taste of Mexico</h2>
          <p id="b3-text">Your go-to for authentic Mexican flavors.</p>
        </div>
        <div id="column"  ref={scrollRef2}>
          <h2>About Us</h2>
          <p id="b3-text">

            Taste of Mexico is an online destination created for everyone
            to enjoy quick and easy access to the finest Mexican cuisine.
            be able to have quick and easy access to the best items the community has to offer.
            Our goal is to bring the vibrant flavors of Mexico to your table, ensuring you savor
            every bite and keep your culinary spirit alive.
          </p>
        </div>
        <div id="column"  ref={scrollRef3}>
          <h2>Contact Us</h2>
          <p id="b3-text">
            Rizal Hall and Gusaling Andres
            <br />
            Bonifacio, Padre Faura St, Ermita,
            <br />
            Manila, 1000 Metro Manila
            <br />
            <br />
            tasteofmexicos@gmail.com
            <br />
            8888-1234
          </p>
        </div>
      </div>
      <div id="footer-container">
        <p id="footer-txt1">
          Copyright © 2024 Taste of Mexico All rights reserved
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
