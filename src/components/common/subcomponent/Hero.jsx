import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import SplitButton from "react-bootstrap/SplitButton";
import Home from "./../../common/image/hemo0.webp";
import "./../../common/hero.css";
const Hero = () => {
  return (
    <section>
      <div className="home1">
        <div className="home1inner">
          <h1>The Best Email Experience Ever Made</h1>
          <p>Get BlueMail for free on any platform</p>
          <div className="mb-2">
            <div class="dropdown">
              <button class="dropbtn">Dropdown</button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>
          <h6>Unlimited accounts. Any provider.</h6>
        </div>
        <img src={Home} alt="" />
      </div>
    </section>
  );
};

export default Hero;
