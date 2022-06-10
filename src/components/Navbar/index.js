import React, { useState } from "react";
import "./index.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="navbar-main-nav">
        {/* 1st logo part  */}
        <div className="navbar-logo">
          <h2>
            <span>E</span>asy
            <span>D</span>rive
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li className="navbar-list-itm">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="navbar-list-itm">
              <NavLink to="/profile-ratereview">Review</NavLink>
            </li>
            <li className="navbar-list-itm">
              <NavLink to="/profile-instructor">ProfileIns</NavLink>
            </li>
            <li className="navbar-list-itm">
              <NavLink to="/profile-student">ProfileStu</NavLink>
            </li>
            <li className="navbar-list-itm">
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a className="hamburger-menu-icon" href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu style={{ fill: '#c65b52', marginRight: '3rem' }}/>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;