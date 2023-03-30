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
      <header className="header-wrapper main-header px-5 sm:px-0">
        <nav className="container mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <h1
              className="hvr-curl-bottom-right col-span-2 Integral logo"
              title="NFTERS"
            >
              NFTERS
            </h1>
            {/* navigations */}
            <div className="hidden col-span-4 lg:flex items-center justify-start gap-5 lg:gap-12 pl-9 ">
              <Link
                to="/market"
                className="hvr-bob navigation DM"
                title="Market"
              >
                Marketplace
              </Link>
              <Link
                to="/resource"
                className="hvr-bob navigation DM"
                title="Resource"
              >
                Resource
              </Link>
              <Link to="/about" className="hvr-bob navigation DM" title="About">
                About
              </Link>
            </div>
            {/* search bar & buttons */}
            <div className="hidden col-span-6 lg:grid grid-cols-2 gap-5 px-5 xl:px-0 ">
              <div className="flex items-center justify-between search-bar px-5">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search"
                  className="DM"
                />
                <p>
                  <RiSearch2Line className="search-icon" />
                </p>
              </div>
              <div className="flex items-center justify-center gap-3 xl:gap-5">
                <button className="hvr-grow button1 nav-upload-btn DM">
                  Upload
                </button>
                <button className="hvr-grow button2 nav-wallet-btn">
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
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              className="DM"
            />
            <p>
              <RiSearch2Line className="search-icon" />
            </p>
          </div>
          {/* navigations */}
          <Link
            to="/marketplace"
            className="navigation DM text-center hover:bg-blue-600 bg-blue-50 py-3 text-black hover:text-white"
          >
            Marketplace
          </Link>
          <Link
            to="/resource"
            className="navigation DM text-center hover:bg-blue-600 bg-blue-50 py-3 text-black hover:text-white"
          >
            Resource
          </Link>
          <Link
            to="/about"
            className="navigation DM text-center hover:bg-blue-600 bg-blue-50 py-3 text-black hover:text-white"
          >
            About
          </Link>
          {/* buttons */}
          <div className="flex items-center justify-center gap-3 xl:gap-5">
            <button className="mobile-upload-btn DM">Upload</button>
            <button className="mobile-wallet-btn DM">Connect Wallet</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
