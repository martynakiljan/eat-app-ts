/** @format */
import "./Location.scss";
import React from "react";

const Location = () => {
  return (
    <div className="location">
      <div className="location__text">
        <h1 className="location__title">You will find us here</h1>
        <div className="location__address-wrapper">
          <p className="location__address">Ankerstreet 45/203</p>
          <p className="location__address">Zurich 8004</p>
        </div>
        <div className="location__number-wrapper">
          <p className="location__number">+41 545 342 123</p>
          <a className="location__email" href="mailto:someone@yoursite.com">
            Email Us
          </a>
        </div>
      </div>

      <div className="location__map">
        <iframe
          title="location"
          src="https://maps.google.com/maps?width=311&amp;height=500&amp;hl=en&amp;q=Ankerstrasse%20Z%C3%BCrich+(Restaurant)&amp;t=p&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>{" "}
        <script
          type="text/javascript"
          src="https://embedmaps.com/google-maps-authorization/script.js?id=7f36ce19448a7528f81a778c8414a0af31bb4c69"
        ></script>
      </div>
    </div>
  );
};

export default Location;
