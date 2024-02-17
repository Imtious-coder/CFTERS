import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      {/* main-footer */}
      <footer className="main-footer py-5 sm:py-20 px-5 px:md-0 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 lg:grid-cols-6 gap-5 lg:gap-24">
            <div data-aos="fade-right" className="col-span-12 lg:col-span-2">
              <h1 className="mb-7 Integral text-center sm:text-start">
                CFTERS
              </h1>
              <p className="mb-8 Averta text-center sm:text-start">
                The world’s first and largest digital marketplace for crypto
                collectibles and non-fungible tokens (NFTs). Buy, sell, and
                discover exclusive digital items.
              </p>
              {/* social media links */}
              <div className="flex items-center justify-center sm:justify-start gap-4">
                <Link
                  data-aos="zoom-in"
                  to="https://www.facebook.com/imtious.midul/"
                  target={"_blank"}
                >
                  <FaFacebook className="facebook-icon" />
                </Link>
                <Link
                  data-aos="zoom-in"
                  to="https://github.com/Imtious-coder"
                  target={"_blank"}
                >
                  <AiFillTwitterCircle className="twitter-icon" />
                </Link>
                <Link
                  data-aos="zoom-in"
                  to="https://www.linkedin.com/in/imtious/"
                  target={"_blank"}
                  className="linkedin-icon-p"
                >
                  <FaLinkedinIn className="linkedin-icon p-2" />
                </Link>
              </div>
            </div>
            <div className="DM col-span-6 md:col-span-3 lg:col-span-1 my-5 lg:my-0">
              <h5 className="mb-2 md:mb-6">Market Place</h5>
              <h6>
                <Link to="/coming-soon" target={"_blank"}>
                  All NFTs
                </Link>
              </h6>
              <h6>
                <Link to="/coming-soon" target={"_blank"}>
                  New
                </Link>
              </h6>
              <h6>
                <Link to="/coming-soon" target={"_blank"}>
                  Art
                </Link>
              </h6>
              <h6>
                <Link to="/coming-soon" target={"_blank"}>
                  Sports
                </Link>
              </h6>
              <h6>
                <Link to="/coming-soon" target={"_blank"}>
                  Utility
                </Link>
              </h6>
              <h6>
                <Link to="/coming-soon" target={"_blank"}>
                  Music
                </Link>
              </h6>
              <h6>
                <Link to="/coming-soon" target={"_blank"}>
                  Domain Name
                </Link>
              </h6>
            </div>
            <div className="DM col-span-6 md:col-span-3 lg:col-span-1 my-5 lg:my-0">
              <h5 className="mb-2 md:mb-6">My Account</h5>
              <h6>
                <Link to="/coming-soon" target={"_blank"}>
                  Profile
                </Link>
              </h6>
              <h6>
                <Link to="/coming-soon" target={"_blank"}>
                  Favourite
                </Link>
              </h6>
              <h6>
                <Link to="/coming-soon" target={"_blank"}>
                  My Collections
                </Link>
              </h6>
              <h6>
                <Link to="/coming-soon" target={"_blank"}>
                  Settings
                </Link>
              </h6>
            </div>
            {/* news-letter */}
            <div
              data-aos="fade-left"
              className="DM col-span-12 md:col-span-6 lg:col-span-2 md:mt-5 lg:mt-0"
            >
              <h5 className="mb-2 md:mb-6">Stay In The Loop</h5>
              <p className="invite-message mb-6">
                Join our mailing list to stay in the loop with our newest
                feature releases, NFT drops, and tips and tricks for navigating
                NFTs.
              </p>
              <div className="flex items-center justify-between search-bar pr-1">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search"
                  className="pl-5"
                />
                <Link to="/" className="button3 hvr-backward footer-cta-btn">
                  Subscribe Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer bottom */}
      <footer className="footer-bottom flex justify-center py-6">
        <h6 className="Averta">
          Copyright &copy; {new Date().getFullYear()} CFTERS
        </h6>
      </footer>
    </>
  );
};

export default Footer;
