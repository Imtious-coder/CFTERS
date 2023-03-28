import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="main-footer py-5 sm:py-10 px-5 px:md-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 lg:grid-cols-6 gap-5">
            <div className="col-span-12 lg:col-span-2">
              <h1 className="mb-5">NFTERS</h1>
              <p className="mb-5">
                The world’s first and largest digital marketplace for crypto
                collectibles and non-fungible tokens (NFTs). Buy, sell, and
                discover exclusive digital items.
              </p>
              <div className="flex items-center gap-5">
                <Link to="/">
                  <FaFacebook className="facebook-icon" />
                </Link>
                <Link to="/">
                  <AiFillTwitterCircle className="twitter-icon" />
                </Link>
                <Link to="/" className="linkedin-icon-p">
                  <FaLinkedinIn className="linkedin-icon p-2" />
                </Link>
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 lg:col-span-1 my-5 lg:my-0">
              <h5 className="mb-2 md:mb-6">Market Place</h5>
              <h6>All NFTs</h6>
              <h6>New</h6>
              <h6>Art</h6>
              <h6>Sports</h6>
              <h6>Utility</h6>
              <h6>Music</h6>
              <h6>Domain Name</h6>
            </div>
            <div className="col-span-6 md:col-span-3 lg:col-span-1 my-5 lg:my-0">
              <h5 className="mb-2 md:mb-6">My Account</h5>
              <h6>Profile</h6>
              <h6>Favourite</h6>
              <h6>My Collections</h6>
              <h6>Settings</h6>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-2 md:mt-5 lg:mt-0">
              <h5 className="mb-2 md:mb-6">Stay In The Loop</h5>
              <p className="invite-message mb-5">
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
                <Link to="/" className="button3 footer-cta-btn">
                  Subscribe Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-bottom flex justify-center py-5">
        <h6>Copyright &copy; {new Date().getFullYear()} NFTERS</h6>
      </footer>
    </>
  );
};

export default Footer;
