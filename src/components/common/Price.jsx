import React, { useEffect } from "react";
import "./../common/price.css"

const Price = () => {
  useEffect(() => {
    // Equivalent of check() function
    const checkBox = document.getElementById("checbox");
    const text1 = document.getElementsByClassName("text1");
    const text2 = document.getElementsByClassName("text2");

    for (let i = 0; i < text1.length; i++) {
      if (checkBox.checked) {
        text1[i].style.display = "block";
        text2[i].style.display = "none";
      } else {
        text1[i].style.display = "none";
        text2[i].style.display = "block";
      }
    }
  }, []); // Empty dependency array to run the effect only once on component mount

  const handleCheckboxChange = () => {
    // Equivalent of check() function for React
    const checkBox = document.getElementById("checbox");
    const text1 = document.getElementsByClassName("text1");
    const text2 = document.getElementsByClassName("text2");

    for (let i = 0; i < text1.length; i++) {
      if (checkBox.checked) {
        text1[i].style.display = "block";
        text2[i].style.display = "none";
      } else {
        text1[i].style.display = "none";
        text2[i].style.display = "block";
      }
    }
  };

  return (
    <section className="Price pt-5 mt-5 mb-5">
      <div className="container">
        <div className="Price-head text-center mb-3">Plans & Price</div>
        <div className="top">
          <div className="toggle-btn">
            <span style={{ margin: "0.8em" }}>Annually</span>
            <label className="switch">
              <input
                type="checkbox"
                id="checbox"
                onChange={handleCheckboxChange}
              />
              <span className="slider round"></span>
            </label>
            <span style={{ margin: "0.8em" }}>Monthly</span>
          </div>
        </div>

        <div class="package-container">
          <div class="packages">
            <div class="pricing-title pb-3">Free</div>
            <ul class="list text-center">
              <li>100mb upload limit for per domain</li>
              <li>68 hours validity for all domains.</li>
              <li>3 domain for per a week</li>
              <li>Ticket Support</li>
            </ul>
            <a href="#" class="button pricing-button">
              Start Now
            </a>
          </div>
          <div class="packages">
            <div class="pricing-title">Pro</div>
            <h2 class="text1">&dollar;19.99</h2>
            <h2 class="text2">&dollar;239.99</h2>
            <ul class="list">
              <li>5GB upload limit for per domain</li>
              <li>68 hours validity for all domains.</li>
              <li>7 domain for per a week</li>
              <li>Ticket Support</li>
              <li>E-mail Support 7/24</li>
            </ul>
            <a href="#" class="button pricing-button">
              Start Now
            </a>
          </div>
          <div class="packages">
            <div class="pricing-title">Business</div>
            <h2 class="text1">&dollar;29.99</h2>
            <h2 class="text2">&dollar;359.99</h2>
            <ul class="list">
              <li>2GB upload limit for per domain</li>
              <li>Limitless validity for all domains.</li>
              <li>Limitless domain</li>
              <li>Full Support Package</li>
            </ul>
            <a href="#" class="button pricing-button">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
