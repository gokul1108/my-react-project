import React from "react";
import reactLogo from "../assets/react.svg";

const Header = () => {
  return (
    <div className="bg-black">
      <div className="flex justify-between items-center px-5 py-3">
        <div className="flex items-center">
          <img src={reactLogo} alt="React Logo" className="h-10 w-10" />
          <div className="ml-3 text-cyan-50 text-xl font-bold">100xdevs</div>
        </div>
        <div className="text-cyan-50">
          <ul className="flex space-x-6">
            <li className="hover:text-cyan-300">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-cyan-300">
              <a href="#services">Services</a>
            </li>
            <li className="hover:text-cyan-300">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
