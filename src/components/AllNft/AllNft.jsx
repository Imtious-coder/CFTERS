import React, { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { RiFilter3Fill } from "react-icons/ri";
import { data } from "../../utils/AllNftCards";
import "./AllNft.scss";

const AllNft = () => {
  const [total, setTotal] = useState(16);
  const datas = data.slice(0, total);
  return (
    <>
      <section className="all-nft-wrapper py-12 px-5">
        <div className="container mx-auto">
          <h1 className="mb-9 text-center sm:text-start">Discover More NFTS</h1>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-3 items-center mb-9">
            <div className="flex items-center flex-wrap gap-3">
              <button className="button3 all-btn">All Categories</button>
              <button className="btn-grey category-btn">Art</button>
              <button className="btn-grey category-btn">Celebrities</button>
              <button className="btn-grey category-btn">Gaming</button>
              <button className="btn-grey category-btn">Sport</button>
              <button className="btn-grey category-btn">Music</button>
              <button className="btn-grey category-btn">Crypto</button>
            </div>
            <button className="flex items-center gap-2 btn-grey filter-btn">
              <RiFilter3Fill className="filter-icon" /> Filter
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {datas?.map(
              (
                {
                  id,
                  name,
                  image,
                  profileImage1,
                  profileImage2,
                  profileImage3,
                  profileImage4,
                },
                index
              ) => {
                return (
                  <div
                    key={index}
                    className="col-span-1 card px-2.5 mx-auto xl:mx-0"
                  >
                    <div className="relative pt-2.5 flex flex-col items-center">
                      <img
                        src={image}
                        alt="card_image"
                        className="main-image"
                      />
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
                    <h2 className="name pt-5 pl-2">{name}</h2>
                    <div className="flex justify-between items-center border-bottom ml-2">
                      <p className="nft flex items-center gap-1 mt-3 mb-3 ">
                        <FaEthereum className="icon" /> 0.25 ETH
                      </p>
                      <p className="numbers">1 of 321</p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <button className="time-btn">3h 50m 2s left</button>
                      <p className="bid">Place a bid</p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <button
            onClick={() => setTotal(23)}
            className="button2 more-btn mt-5 sm:mt-14 mx-auto"
          >
            More NFTs
          </button>
        </div>
      </section>
    </>
  );
};

export default AllNft;
