import './LandingPage.css';
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import landing2Image from './landing page/landing-2.png';
import landing4Image from './landing page/landing-4.png';
import NavBar1 from './NavBar1';
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
    <div className="main-container">
      <div id="header-container">
      <NavBar1 />
      </div>

      <div id="image-container">
        <div id="lp-1">
          <div id="btn-lp-1">
            <button onClick={handleShopClick}>Shop Now</button>
          </div>
        </div>
      </div>

      <div className="body1-container">
        <div id="img-circle">
          <img id="lp-2" src={landing2Image} height="400" width="400" alt="Landing 2" />
        </div>
        <div id="body1-txt">
          <p id="body1-txt1"> Lorem ipsum</p>
          <p id="body1-txt2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
            <br />
            <br />
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation
          </p>
        </div>
      </div>
      <div className="body2-container">
        <div id="brownsqr-container">
          <div id="brownsqr"></div>
        </div>
        <div id="body2-img">
          <img src={landing4Image} height="400" width="400" alt="Landing 4" />
        </div>
      </div>
      <div id="body3-container">
        <div id="column"  ref={scrollRef1}>
          <h2>Preciales</h2>
          <p>Your one-stop shop for freshness and wellness.</p>
        </div>
        <div id="column"  ref={scrollRef2}>
          <h2>Lorem</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div id="column"  ref={scrollRef3}>
          <h2>Contact Us</h2>
          <p>
            1 Lesciapre St., Opre Avenue,
            <br />
            Manila City, Philippines
            <br />
            Postal Code 1000
            <br />
            <br />
            preciales@email.com
            <br />
            8888-1234
          </p>
        </div>
      </div>
      <div id="footer-container">
        <p id="footer-txt1">
          Copyright © 2023 Preciales Store All rights reserved
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
