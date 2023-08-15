import facebook from "../assets/images/icon-facebook.svg";
import youtube from "../assets/images/icon-youtube.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";
import logo from "../assets/images/logo-copy.svg";

function Footer() {
  return (
    <div className="footer bg-[#2d314d] w-[100%] pt-10">
      <div className="footer-container w-[100%] flex flex-col items-center lg:flex lg:flex-row lg:items-center lg:justify-center lg:p-10">
        <div className=" flex flex-col items-center justify-center lg:w-[100%] lg:flex lg:items-start">
          <img src={logo} alt="footer-logo" className="fill-white w-[50%] " />
          <div className="contact-icon w-[100%] flex items-center justify-center gap-4 p-10 lg:flex lg:justify-start lg:p-10 lg:pl-0">
            <img
              src={facebook}
              alt="facebook-icon"
              className="w-[8%] cursor-pointer"
            />
            <img
              src={youtube}
              alt="youtube-icon"
              className="w-[8%] cursor-pointer"
            />
            <img
              src={twitter}
              alt="twitter-icon"
              className="w-[8%] cursor-pointer"
            />
            <img
              src={pinterest}
              alt="pinterest-icon"
              className="w-[8%] cursor-pointer"
            />
            <img
              src={instagram}
              alt="instagram-icon"
              className="w-[8%] cursor-pointer"
            />
          </div>
        </div>

        <ul className="menu text-[#ffffff] flex flex-col text-center gap-2 p-1 mb-6 lg:grid lg:grid-rows-3 grid-flow-col lg:mt-1 lg:text-left lg:flex lg:items-center">
          <li className="active:text-[#31d35c] cursor-pointer mb-2">
            About Us
          </li>
          <li className="active:text-[#31d35c] cursor-pointer lg:mb-2">
            Contact
          </li>
          <li className="active:text-[#31d35c] cursor-pointer lg:mb-2">Blog</li>
          <li className="active:text-[#31d35c] cursor-pointer lg:mb-2">
            Careers
          </li>
          <li className="active:text-[#31d35c] cursor-pointer lg:mb-2">
            Support
          </li>
          <li className="active:text-[#31d35c] cursor-pointer lg:mb-2">
            Privacy Policy
          </li>
        </ul>
        <div className="flex flex-col items-center lg:flex lgLflex-col lg:items-end lg:gap-6">
          <button className="w-[45%] p-3 rounded-full bg-gradient-to-r from-[#31d35c] to-[#2bb7da] active:opacity-50 text-[#ffffff]">
            <a href="#">Request Invite</a>
          </button>
          <footer className="text-[#9698a6] text-center p-8 lg:text-right lg:p-4">
            © Easybank. All Rights Reserved
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;
