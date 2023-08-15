import React from "react";
import mobileBg from "../assets/images/bg-intro-mobile.svg";
import desktopBg from "../assets/images/bg-intro-desktop.svg";
import Telephone from "../assets/images/image-mockups.png";

function Banner() {
  return (
    <>
      <div className="banner w-[100%] ">
        <div className="banner-container lg:flex">
          <div
            className="banner-image-mobile w-[100%] lg:hidden"
            style={{
              backgroundImage: `url(${mobileBg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <img src={Telephone} alt="hero-image" className="" />
          </div>
          <div className="banner-content flex flex-col justify-center items-center text-center p-2 gap-8 lg:flex lg:flex-col lg:items-start lg:text-start ">
            <div className="banner-content-details flex flex-col gap-4 lg:p-8 lg:w-[100%] lg:gap-2">
              <h1 className="banner-content-text-header text-4xl text-[#2d314d] lg:text-6xl lg:mb-6 lg:w-[90%]">
                Next generation digital banking
              </h1>
              <p className="banner-content-text text-[#9698a6] lg:w-[80%]">
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing, and
                much more.
              </p>
            </div>
            <button className="request-button lg:p-4 lg:ml-6 p-3 rounded-full w-[50%] lg:w-[30%] bg-gradient-to-r from-[#31d35c] to-[#2bb7da] active:opacity-70 text-[#ffffff]">
              <a href="#">Request Invite</a>
            </button>
          </div>
          <div
            className="banner-image-desktop max-sm:hidden sm:hidden md:hidden lg:flex"
            style={{
              backgroundImage: `url(${desktopBg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <img src={Telephone} alt="hero-image" className="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
