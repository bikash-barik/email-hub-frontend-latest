import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footermain">
      <div className="containermain rowmain">
        <div className="footer-colmain">
          <h4>company</h4>
          <ul>
            <li>
              <a href="#">about us</a>
            </li>
            <li>
              <a href="#">our services</a>
            </li>
            <li>
              <a href="#">privacy policy</a>
            </li>
            <li>
              <a href="#">visit website</a>
            </li>
          </ul>
        </div>
        <div className="footer-colmain">
          <h4>get help</h4>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">shipping</a>
            </li>
            <li>
              <a href="#">returns</a>
            </li>
            <li>
              <a href="#">order status</a>
            </li>
            <li>
              <a href="#">payment options</a>
            </li>
          </ul>
        </div>
        <div className="footer-colmain">
          <h4>online shop</h4>
          <ul>
            <li>
              <a href="#">download</a>
            </li>
            <li>
              <a href="#">changelog</a>
            </li>
            <li>
              <a href="#">github</a>
            </li>
            <li>
              <a href="#">all version</a>
            </li>
          </ul>
        </div>
        <div className="footer-colmain">
          <h4>follow us</h4>
          <div className="social-linksmain">
            <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
