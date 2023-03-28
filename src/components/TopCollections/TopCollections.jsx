import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { SiEthereum } from "react-icons/si";
import Image1 from "../../assets/images/top-collections/image1.png";
import Profile from "../../assets/images/top-collections/profile.png";
import { middleCards, topCards } from "../../utils/TopCollectionsData";
import "./TopCollections.scss";

const TopCollections = () => {
  return (
    <>
      <section className="top-collection-wrapper py-10 sm:py-20 px-5 md:px-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-3 flex flex-col sm:flex-row lg:flex-col lg:col-span-1 left-card">
              <img src={Image1} alt="main_image" className="mx-auto mb-7" />
              <div className="flex sm:pl-10 lg:pl-0 flex-col lg:flex-row justify-center xl:justify-between gap-5 lg:gap-10 xl:gap-0 card-details">
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <img
                    src={Profile}
                    alt="profile_image"
                    className="profile-image"
                  />
                  <div>
                    <p className="name mb-1 text-center sm:text-start">
                      The Futr Abstr
                    </p>
                    <p className="stock text-center sm:text-start">
                      10 in the stock
                    </p>
                  </div>
                </div>
                <div>
                  <p className="bid mb-1 text-center sm:text-start">
                    Highest Bid
                  </p>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <SiEthereum className="icon" />
                    <p className="amount">0.25 ETH</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3 lg:col-span-1 flex flex-col sm:flex-row flex-wrap lg:flex-col gap-10 lg:gap-5 middle-cards lg:border-r-2 mt-5 lg:mt-0">
              {middleCards?.map(
                ({ image, name, nft, profileImage, count, button }, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row items-center lg:items-start justify-center xl:justify-start gap-5 mb-10 lg:mb-0 "
                    >
                      <img
                        src={image}
                        alt="card_image"
                        className="card-image"
                      />
                      <div>
                        <h6 className="name mb-2 text-center sm:text-start">
                          {name}
                        </h6>
                        <div className="flex items-center gap-3">
                          <img
                            src={profileImage}
                            alt="profile"
                            className="profile-image"
                          />
                          <button className="amount-btn">
                            <SiEthereum className="icon" /> {nft}
                          </button>
                          <p className="count">{count}</p>
                        </div>
                        <button
                          className={`${
                            button === "button1"
                              ? "button1 cta-btn"
                              : "button2 cta-btn-2"
                          } mt-3 mx-auto sm:mx-0`}
                        >
                          Place a bid
                        </button>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
            <div className="col-span-3 flex flex-col items-center lg:col-span-1 top-cards">
              <h2 className="mb-2">Top Collections over</h2>
              <h3 className="mb-10">Last 7 days</h3>
              {topCards?.map(
                (
                  { id, image, name, rankColor, rank, nft, blueTick, border },
                  index
                ) => {
                  return (
                    <div
                      key={index}
                      className={`${
                        border === true ? "card-border" : ""
                      } grid grid-cols-1 sm:grid-cols-5 w-full gap-5 sm:gap-8 items-center mb-10 sm:mb-5 pb-5`}
                    >
                      <p className="number">{id}</p>
                      <div className="block mx-auto">
                        <div className="relative">
                          <img src={image} alt="profile" className="mx-auto" />
                          {blueTick === true ? (
                            <p className="absolute blue-tick text-4xl text-blue-500 -top-2 -right-1">
                              <BsPatchCheckFill />
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div>
                        <h6 className="name mb-2 text-center sm:text-start">
                          {name}
                        </h6>
                        <div className="flex nft items-center justify-center sm:justify-start gap-1">
                          <SiEthereum className="icon" />
                          <p>{nft}</p>
                        </div>
                      </div>
                      <p
                        className={`${
                          rankColor === "green" ? "rank-green" : "rank-red"
                        } text-center sm:text-end `}
                      >
                        {rank}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopCollections;
