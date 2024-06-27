import React, { useEffect, useState } from "react";
import MenuMobile from "../MenuMobile/MenuMobile";
import logo from "../../assets/images/logo.svg";
import hamburgerIcon from "../../assets/images/icon-hamburger.svg";
import arrowDown from "../../assets/images/icon-arrow-down.svg";
import "./Header.scss";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsMenuOpen(true);
    }
  });

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 768;
      setIsMenuOpen(isDesktop);
    };
    window.addEventListener("resize", handleResize);
  });

  return (
    <header className="header">
      <div className="header-top">
        <img src={logo} alt="logo" className="logo" />
        <button
          className="btn"
          aria-label="open menu button"
          onClick={toggleMenu}
        >
          <img src={hamburgerIcon} alt="open menu btn" />
        </button>
        {isMenuOpen && <MenuMobile />}
      </div>
      <div className="header-bottom">
        <h1>We are creatives</h1>
        <img src={arrowDown} alt="arrow down" className="arrow-icon" />
      </div>
    </header>
  );
}
