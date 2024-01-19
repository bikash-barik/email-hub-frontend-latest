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
            {[SplitButton].map((DropdownType, idx) => (
              <DropdownType
                as={ButtonGroup}
                key={idx}
                id={`dropdown-button-drop-${idx}`}
                size="lg"
                title="Drop large"
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownType>
            ))}
          </div>
          <h6>Unlimited accounts. Any provider.</h6>
        </div>
        <img src={Home} alt="" />
      </div>
    </section>
  );
};

export default Hero;
