import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import HamburgerMenu from "../assets/images/icon-hamburger.svg";
import closeIcon from "../assets/images/icon-close.svg";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  console.log(click);

  return (
    <div className="header text-lg lg:w-[100%]">
      <div className="header-container">
        <nav className="header-elements flex justify-center p-6 lg:items-center lg:p-4 lg:px-12 lg:w-[100%]">
          {/* desktop-version */}
          <div className="logo-container lg:block lg:w-[60%] sm:hidden max-md:hidden">
            <a href="#header">
              <img className="w-[55%] " src={logo} alt="logo-icon" />
            </a>
          </div>
          <ul className="menu-container lg:flex lg:w-[23%]] sm:hidden max-md:hidden mx-6 mr-16 text-[#9698a6] ">
            <li className="menu-link active:text-[#2d314d]">
              <a href="#header">Home</a>
            </li>
            <li className="menu-link active:text-[#2d314d]">
              <a href="#about">About</a>
            </li>
            <li className="menu-link active:text-[#2d314d]">
              <a href="#">Contact</a>
            </li>
            <li className="menu-link active:text-[#2d314d]">
              <a href="#blog">Blogs</a>
            </li>
            <li className="menu-link active:text-[#2d314d]">
              <a href="#">Careers</a>
            </li>
          </ul>
          <button className="button-1 lg:block lg:w-[25%] sm:hidden max-md:hidden p-3 rounded-full bg-gradient-to-r from-[#31d35c] to-[#2bb7da] active:opacity-70 text-[#ffffff]">
            <a href="#">Request Invite</a>
          </button>

          {/* desktop-version */}
          {/* mobile-version  */}
          <div className="logo-container lg:hidden">
            <a href="#">
              <img className="w-[50%] " src={logo} alt="logo-icon" />
            </a>
          </div>
          <ul
            className={
              click
                ? "menu lg:hidden flex w-[90%] h-auto flex flex-col absolute top-[10%] text-center gap-4 bg-white rounded-md mt-3 transition-all duration-500 ease-linear p-8 text-[#2d314d]"
                : "menu lg:hidden flex w-[90%] h-auto flex flex-col absolute top-[10%] left-[100%] text-center gap-4 bg-white rounded-md mt-3 transition-all duration-500 ease-linear p-8 text-[#2d314d]"
            }
          >
            <li className="menu-link ">
              <a href="#">Home</a>
            </li>
            <li className="menu-link">
              <a href="#">About</a>
            </li>
            <li className="menu-link">
              <a href="#">Contact</a>
            </li>
            <li className="menu-link">
              <a href="#">Blogs</a>
            </li>
            <li className="menu-link">
              <a href="#">Careers</a>
            </li>
          </ul>
          <div
            className="mobile-menu w-[8%] lg:hidden flex items-center"
            onClick={handleClick}
          >
            {click ? (
              <img src={closeIcon} alt="close-icon" />
            ) : (
              <img src={HamburgerMenu} alt="hamburgerMenu-icon" />
            )}
          </div>
          {/* mobile-version  */}
        </nav>
      </div>
    </div>
  );
}

export default Header;
