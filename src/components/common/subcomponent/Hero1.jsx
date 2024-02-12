import React from "react";
import "./../../common/hero.css";
import Hero from "./../../common/image/home1.webp";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";

const Hero1 = () => {
  return (
    <section>
      <div className="hero1">
        <img src={Hero} alt="" />
        <div className="hero1inner">
          <h1>
            <span>BlueMail GenAI</span>
            <br />
            Generative Email
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam unde
            consequuntur sapiente, voluptatibus hic facere illo minus omnis est
            eius vitae qui repellendus id magni, temporibus in dicta corporis
            autem beatae explicabo vero deleniti.
          </p>
          <a href="/">
            learn More <FaArrowRightLong />{" "}
          </a>
        </div>
      </div>

      <div className="hero11">
        <img src={Hero} alt="" />
        <div className="hero11inner">
          <h5>
            <span>BlueMail GenAI</span>
            <br />
            Generative Email
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam unde
            consequuntur sapiente, voluptatibus hic facere illo minus omnis est
            eius vitae qui repellendus id magni, temporibus in dicta corporis
            autem beatae explicabo vero deleniti.
          </p>
          <button className="btn btn-outline-primary p-2 btn-lg">
            Download <FaDownload />{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
