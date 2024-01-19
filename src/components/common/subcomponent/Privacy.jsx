import React from "react";
import Privacy1 from "./../../common/image/privacy.webp";
import "./../../common/privacy.css"
const Privacy = () => {
  return (
    <section>
      <div className="privacy">
        <img src={Privacy1} alt="" />
        <div className="privacycontent">
          <h1>
            Privacy <span> &</span> Security
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            repellendus blanditiis, autem nobis beatae molestias, voluptates
            ullam modi nam saepe nulla repellat pariatur, illo optio corporis
            architecto sed reprehenderit officia?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
