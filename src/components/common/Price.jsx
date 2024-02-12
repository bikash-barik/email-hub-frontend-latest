import React, { useEffect } from "react";
import "./../common/price.css"

const Price = () => {
  useEffect(() => {
    // Equivalent of check() function
    const checkBox = document.getElementById("checbox");
    const text1 = document.getElementsByClassName("text11");
    const text2 = document.getElementsByClassName("text21");

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
    const text1 = document.getElementsByClassName("text11");
    const text2 = document.getElementsByClassName("text21");

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
    <section className="Price1 pt-5 mt-5 mb-5">
      <div className="container1">
        <div className="Price-head1 text-center mb-3">Plans & Price</div>
        <div className="top1">
          <div className="toggle-btn1">
            <span className="spanclass">Annually</span>
            <label className="switch1">
              <input
                type="checkbox"
                id="checbox"
                onChange={handleCheckboxChange}
              />
              <span className="slider1 round1"></span>
            </label>
            <span className="spanclass">Monthly</span>
          </div>
        </div>

        <div className="package-container1">
          <div className="packages1">
            <div className="pricing-title1 pb-3">Free</div>
            <ul className="list1 text-center">
              <li>100mb upload limit for per domain</li>
              <li>68 hours validity for all domains.</li>
              <li>3 domain for per a week</li>
              <li>Ticket Support</li>
            </ul>
            <a href="#" className="button1 pricing-button1">
              Start Now
            </a>
          </div>
          <div className="packages1">
            <div className="pricing-title1">Pro</div>
            <h2 className="text11">$19.99</h2>
            <h2 className="text21">$239.99</h2>
            <ul className="list1">
              <li>5GB upload limit for per domain</li>
              <li>68 hours validity for all domains.</li>
              <li>7 domain for per a week</li>
              <li>Ticket Support</li>
              <li>E-mail Support 7/24</li>
            </ul>
            <a href="#" className="button1 pricing-button1">
              Start Now
            </a>
          </div>
          <div className="packages1">
            <div className="pricing-title1">Business</div>
            <h2 className="text11">$29.99</h2>
            <h2 className="text21">$359.99</h2>
            <ul className="list1">
              <li>2GB upload limit for per domain</li>
              <li>Limitless validity for all domains.</li>
              <li>Limitless domain</li>
              <li>Full Support Package</li>
            </ul>
            <a href="#" className="button1 pricing-button1">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
