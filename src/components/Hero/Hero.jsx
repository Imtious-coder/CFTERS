import React from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import Profile from "../../assets/images/hero/hero-card-profile.png";
import Stamp from "../../assets/images/hero/hero-card-stamp.png";
import { data } from "../../utils/HeroCardsData";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <section className="hero-wrapper py-14 px-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-24">
            <div className="col-span-1">
              <h1 className="mb-10 text-center sm:text-start">
                Discover, and collect Digital Art NFTs
              </h1>
              <h6 className="mb-10 sm:pr-20 text-center sm:text-start">
                Digital marketplace for crypto collectibles and non-fungible
                tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
              </h6>
              <button className="button1 hero-cta-btn mb-10 mx-auto sm:mx-0">
                Explore Now
              </button>
              <div className="count-up flex flex-wrap justify-center sm:justify-start gap-5">
                <div>
                  <h2>98k+</h2>
                  <p>Artwork</p>
                </div>
                <div>
                  <h2>12k+</h2>
                  <p>Ausction</p>
                </div>
                <div>
                  <h2>15k+</h2>
                  <p>Artist</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 images relative">
              <div className="px-5 relative">
                {/* stamp */}
                <img src={Stamp} className="card-stamp hidden" alt="stamp" />
                <div className="relative">
                  {data?.map((card, index) => {
                    return (
                      <div
                        key={index}
                        className={`${
                          index === 1
                            ? "left-9 z-20"
                            : index === 2
                            ? "left-16 ml-1 z-10"
                            : "z-30"
                        } lg:absolute`}
                      >
                        <div className="relative card overflow-hidden bg-white">
                          <img
                            src={card.image}
                            alt="card"
                            className={`${
                              index === 1 ? "h2" : index === 2 ? "h3" : "h1"
                            } card-main-image h1`}
                          />
                          {/* card details */}
                          <div className="absolute top-0 card-details p-3 sm:p-10">
                            <div className="relative">
                              <h4 className="card-title mb-2 text-center sm:text-start">
                                Abstr Gradient NFT
                              </h4>
                              <div className="flex justify-center sm:justify-start gap-4 items-center">
                                <img
                                  src={Profile}
                                  className="card-profile-image"
                                  alt="profile"
                                />
                                <p className="card-profile-name">Arkhan17</p>
                              </div>
                              {/* card footer */}
                              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-0 sm:justify-between items-center card-footer px-5 py-2 sm:py-0 mt-20 sm:mt-0">
                                <div className="">
                                  <p className="mb-2 footer-title">
                                    Current Bid
                                  </p>
                                  <div className="flex items-center gap-2">
                                    <p className="icon"> {card.nftLogo}</p>
                                    <p className="footer-info">{card.nft}</p>
                                  </div>
                                </div>
                                <div>
                                  <p className="mb-2 footer-title">Ends in</p>
                                  <p className="footer-info">
                                    {card.endingTime}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
