import React from "react";
import { data } from "../../utils/FeaturedCradsData";
import "./Featured.scss";

const Featured = () => {
  return (
    <>
      <section className="featured-wrapper py-5 sm:py-24 px-5 px:md-0">
        <div className="container mx-auto">
          <h1 className="Integral text-center md:text-start">
            Collection Featured NFTs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-14 gap-8">
            {data?.map(
              (
                {
                  id,
                  title,
                  mainImage,
                  sideImage1,
                  sideImage2,
                  sideImage3,
                  name,
                  profileImage,
                  totalItems,
                },
                index
              ) => {
                return (
                  <div className="col-span-1 mb-8 2xl:mb-0" key={index}>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-2.5 mb-5 sm:mb-7">
                      <img
                        src={mainImage}
                        alt="main_image"
                        className={`${
                          id === 0
                            ? "main-image-radius1"
                            : id === 1
                            ? "main-image-radius2"
                            : id === 2
                            ? "main-image-radius3"
                            : ""
                        } main-image mx-auto sm:mx-0`}
                      />
                      <div className="flex sm:flex-col flex-wrap justify-center gap-2">
                        <img
                          src={sideImage1}
                          alt="side_images"
                          className={`${
                            id === 2
                              ? "side-images-radius4"
                              : "side-images-radius1"
                          } side-images`}
                        />
                        <img
                          src={sideImage2}
                          alt="side_images"
                          className={`${
                            id === 0
                              ? "side-images-radius1"
                              : id === 1
                              ? "side-images-radius2"
                              : "side-images-radius4"
                          } side-images`}
                        />
                        <img
                          src={sideImage3}
                          alt="side_images"
                          className={`${
                            id === 1
                              ? "side-images-radius3"
                              : "side-images-radius1"
                          } side-images`}
                        />
                      </div>
                    </div>
                    <div className="lg:pr-20 lg:mr-10 xl:mr-0 xl:pr-8 2xl:pr-20 2xl:mr-8 pt-0.5">
                      <h2 className="DM mb-2.5 text-center md:text-start">
                        {title}
                      </h2>
                      <div className="flex justify-center md:justify-between items-center gap-5 md:gap-0">
                        <div className="flex gap-2.5 items-center">
                          <img
                            src={profileImage}
                            alt="profile"
                            className="profile-image"
                          />
                          <p className="DM name">{name}</p>
                        </div>
                        <button className="DM button4 total-btn">
                          Total {totalItems} Items
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
