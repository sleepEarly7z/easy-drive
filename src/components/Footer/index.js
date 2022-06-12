import React from "react";
import "./index.scss";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4 className="footer-heading-4">EASY DRIVE INC</h4>
            <h1 className="list-unstyled">
              <li>xxx-xxx-xxxx</li>
              <li>Vancouver, Canada</li>
              <li>123 Street South Vancouver</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4 className="footer-heading-4">Services</h4>
            <ul className="list-unstyled">
              <li>Rate and Review</li>
              <li>Find a driver instructor</li>
              <li>Find a driving school</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4 className="footer-heading-4">Help</h4>
            <ul className="list-unstyled">
              <li>Q&A</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row mb-2">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} EASY DRIVE | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;