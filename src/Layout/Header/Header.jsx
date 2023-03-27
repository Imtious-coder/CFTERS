import React, { useState } from "react";
import { RiMenu3Fill, RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-cards";
import "./Header.scss";

const Header = () => {
  const [menu, setMenu] = useState("hidden");
  return (
    <>
      {/* MAIN HEADER */}
      <header className="header-wrapper main-header">
        <nav className="px-5 mx-auto">
          <div className="grid grid-cols-12 lg:grid-cols-12 gap-5">
            <h1 className="col-span-2">NFTERS</h1>
            {/* navigations */}
            <div className="hidden col-span-4 grow lg:flex items-center gap-5 lg:gap-10 pl-8 justify-start">
              <Link to="/market" className="navigation">
                Marketplace
              </Link>
              <Link to="/resource" className="navigation">
                Resource
              </Link>
              <Link to="/about" className="navigation">
                About
              </Link>
            </div>
            {/* search bar & buttons */}
            <div className="hidden col-span-6 lg:grid grid-cols-2 gap-5 px-0 xl:px-5 ">
              <div className="flex items-center justify-between search-bar px-5">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search"
                />
                <p>
                  <RiSearch2Line className="search-icon" />
                </p>
              </div>
              <div className="flex items-center justify-center gap-3 xl:gap-5">
                <button className="button1 nav-upload-btn">Upload</button>
                <button className="button2 nav-wallet-btn">
                  Connect Wallet
                </button>
              </div>
            </div>
            <p
              onClick={() =>
                menu === "hidden" ? setMenu("block") : setMenu("hidden")
              }
              className="lg:hidden col-span-10 ml-auto flex justify-end items-center text-3xl menu-icon"
            >
              <RiMenu3Fill />
            </p>
          </div>
        </nav>
      </header>
      {/* MOBILE HEADER */}
      <header className={`${menu} mobile-header lg:hidden`}>
        <div className="grid grid-cols-1 gap-5 p-5">
          <div className="flex items-center justify-between search-bar px-7">
            <input type="text" name="search" id="search" placeholder="Search" />
            <p>
              <RiSearch2Line className="search-icon" />
            </p>
          </div>
          {/* navigations */}
          <Link
            to="/marketplace"
            className="navigation text-center hover:bg-blue-600 bg-blue-800 py-3 text-white"
          >
            Marketplace
          </Link>
          <Link
            to="/resource"
            className="navigation text-center hover:bg-blue-600 bg-blue-800 py-3 text-white"
          >
            Resource
          </Link>
          <Link
            to="/about"
            className="navigation text-center hover:bg-blue-600 bg-blue-800 py-3 text-white"
          >
            About
          </Link>
          {/* buttons */}
          <div className="flex items-center justify-center gap-3 xl:gap-5">
            <button className="mobile-upload-btn">Upload</button>
            <button className="mobile-wallet-btn">Connect Wallet</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
