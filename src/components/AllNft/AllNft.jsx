import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { RiFilter3Fill } from "react-icons/ri";
import { data } from "../../utils/AllNftCards";
import "./AllNft.scss";

const AllNft = () => {
  // AOS
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  // Hooks
  const [dataLength, setDataLength] = useState(16);
  const [datas, setDatas] = useState(data);

  // Filter data
  const handleFilter = (e) => {
    const filterData = data.filter(
      ({ category }) => category === e.target.innerHTML
    );
    setDatas(filterData);
  };
  // All data
  const handleData = () => {
    const allData = data.slice(0, 23);
    setDatas(allData);
  };

  return (
    <>
      <section className="all-nft-wrapper py-10 sm:pt-16 sm:pb-12 px-5 overflow-hidden">
        <div className="container mx-auto">
          <h1 className="Integral mb-9 text-center sm:text-start">
            Discover More NFTS
          </h1>
          {/* filter buttons */}
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-3 items-center mb-10">
            <div className="DM flex items-center justify-center md:justify-start flex-wrap gap-3">
              <button
                onClick={() => handleData()}
                className="button3 hvr-grow all-btn"
              >
                All Categories
              </button>
              <button
                onClick={(e) => handleFilter(e)}
                className="btn-grey hvr-grow category-btn"
              >
                Art
              </button>
              <button
                onClick={(e) => handleFilter(e)}
                className="btn-grey hvr-grow category-btn"
              >
                Celebrities
              </button>
              <button
                onClick={(e) => handleFilter(e)}
                className="btn-grey hvr-grow category-btn"
              >
                Gaming
              </button>
              <button
                onClick={(e) => handleFilter(e)}
                className="btn-grey hvr-grow category-btn"
              >
                Sport
              </button>
              <button
                onClick={(e) => handleFilter(e)}
                className="btn-grey hvr-grow category-btn"
              >
                Music
              </button>
              <button
                onClick={(e) => handleFilter(e)}
                className="btn-grey hvr-grow category-btn"
              >
                Crypto
              </button>
            </div>
            <button className="DM hvr-grow flex items-center gap-2 btn-grey filter-btn">
              <RiFilter3Fill className="filter-icon" /> Filter
            </button>
          </div>
          {/* cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {datas
              ?.slice(0, dataLength)
              .map(
                (
                  {
                    name,
                    image,
                    profileImage1,
                    profileImage2,
                    profileImage3,
                    profileImage4,
                    radius,
                  },
                  index
                ) => {
                  return (
                    <div
                      data-aos="zoom-in"
                      key={index}
                      className="col-span-1 card px-2.5 mx-auto xl:mx-0"
                    >
                      {/* images */}
                      <div className="relative pt-2.5 flex flex-col items-center">
                        <img
                          src={image}
                          alt="main_image"
                          className={`${
                            radius === 13.16
                              ? "radius1"
                              : radius === 11
                              ? "radius2"
                              : "radius3"
                          } main-image`}
                        />
                        {/* profile images */}
                        <div className="flex absolute -bottom-3 left-2 items-center">
                          <img
                            src={profileImage1}
                            alt="profile"
                            className="profile-image"
                          />
                          <img
                            src={profileImage2}
                            alt="profile"
                            className="profile-image -ml-3"
                          />
                          <img
                            src={profileImage3}
                            alt="profile"
                            className="profile-image -ml-3"
                          />
                          <img
                            src={profileImage4}
                            alt="profile"
                            className="profile-image -ml-3"
                          />
                        </div>
                      </div>
                      {/* details */}
                      <h2 className="DM name pt-5 pl-2">{name}</h2>
                      <div className="DM flex justify-between items-center border-bottom ml-2">
                        <p className="nft flex items-center gap-1 mt-3 mb-5 ">
                          <FaEthereum className="icon" /> 0.25 ETH
                        </p>
                        <p className="numbers">1 of 321</p>
                      </div>
                      <div className="flex items-center justify-between mt-2.5">
                        <button className="DM time-btn">3h 50m 2s left</button>
                        <p className="DM bid">Place a bid</p>
                      </div>
                    </div>
                  );
                }
              )}
          </div>
          {/* more nft button */}
          <button
            onClick={() => setDataLength(23)}
            className={`${
              dataLength === 23 ? "disabled" : "hvr-grow button2 more-btn"
            } mt-5 sm:mt-14 mx-auto`}
          >
            More NFTs
          </button>
        </div>
      </section>
    </>
  );
};

export default AllNft;
