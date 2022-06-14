import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
import './ScrollToTop.scss'

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 320) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showScrollTopButton && (
        <FaChevronUp
          className="top-btn-position top-btn-style"
          onClick={scrollTop}
        />
      )}
    </div>
  );
};

export default ScrollToTop;