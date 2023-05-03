import React from "react";
import Earth from "../Globe/Globe";
import Header from "../Header/Header";
import Searchbar from "../Search/Search";
import "../landingPage/landing.css";
import Features from "../features/Features";
import Footer from "../footer/Footer";
import Working from "../working/Working";
import Contact from "../contact/Contact";

import "animate.css";

const Landing = () => {
  return (
    <div>
      <Header />
      <div className="search-main">
       
        <div className="search-input">
        <h2 className="headText animate__animated animate__slideInDown">
          Begin your journey with a first search
        </h2>
          <Searchbar />
          <div className="animate__animated animate__slideInUp chiplet-main">
            <p className="ptxt">Suggested for you</p>
            <div className="chips">
              <div>Bangalore</div>
              <div>Ramnagara</div>
              <div>Mumbai</div>
              <div>Chennai</div>
            </div>
          </div>
        </div>

       
      </div>

      <div className="static-card">
            <div>Global population is still growing by more than 80 million a year, however, and is most likely to continue growing for most of this century unless we take action.</div>
            <div>Eight countries will make up over half the projected total population increase by 2050: India, Nigeria, Pakistan, the Democratic Republic of the Congo, Ethiopia, Tanzania, the Philippines and Egypt.</div>
            <div>While population growth is highest in the Global South, and relatively low in most parts of the Global North, consumption, resource use and carbon emissions are far greater in the richest parts of the world.</div>
        </div>
      <Earth />
      <Features />
      <Working />
      <Contact />
      <Footer />
    </div>
  );
};

export default Landing;
