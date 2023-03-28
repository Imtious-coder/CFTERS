import React from "react";
import { A11y, EffectCards, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import Profile from "../../assets/images/hero/hero-card-profile.png";
import Stamp from "../../assets/images/hero/hero-card-stamp.png";
import { data } from "../../utils/HeroCardsData";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <section className="hero-wrapper py-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-10">
            <div className="col-span-1">
              <h1 className="mb-10">Discover, and collect Digital Art NFTs</h1>
              <h6 className="mb-10 pr-20">
                Digital marketplace for crypto collectibles and non-fungible
                tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
              </h6>
              <button className="button1 hero-cta-btn mb-10">
                Explore Now
              </button>
              <div className="count-up flex gap-5">
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
            <div className="col-span-1 w-full px-5 relative">
              {/* stamp */}
              <img src={Stamp} className="card-stamp" alt="stamp" />
              <div>
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[
                    EffectCards,
                    Navigation,
                    Pagination,
                    Scrollbar,
                    A11y,
                  ]}
                  className="mySwiper"
                >
                  {data?.map((card, index) => {
                    return (
                      <SwiperSlide>
                        <div className="relative card overflow-hidden bg-white">
                          <img
                            src={card.image}
                            alt="card"
                            className="card-main-image"
                          />
                          {/* card details */}
                          <div className="absolute top-0 card-details p-10">
                            <div className="relative">
                              <h4 className="card-title mb-2">
                                Abstr Gradient NFT
                              </h4>
                              <div className="flex gap-4 items-center">
                                <img
                                  src={Profile}
                                  className="card-profile-image"
                                  alt="profile"
                                />
                                <p className="card-profile-name">Arkhan17</p>
                              </div>
                              {/* card footer */}
                              <div className="flex justify-between items-center card-footer px-5">
                                <div>
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
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
