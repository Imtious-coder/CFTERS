import React from "react";
import Image1 from "../../assets/images/sign-up-section/image1.png";
import Image2 from "../../assets/images/sign-up-section/image2.png";
import Image3 from "../../assets/images/sign-up-section/image3.png";
import Profile1 from "../../assets/images/sign-up-section/profile1.png";
import Profile2 from "../../assets/images/sign-up-section/profile2.png";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <>
      <section className="sign-up-wrapper py-10 sm:py-24 px-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-2 xl:gap-20">
            {/* Images */}
            <div className="col-span-1 lg:col-span-2 xl:col-span-1">
              <div className="flex flex-col justify-center lg:justify-start sm:flex-row items-center gap-16">
                <div>
                  <div className="relative mb-12">
                    <img src={Image1} alt="main_image" className="main-image" />
                    <img
                      src={Profile1}
                      alt="profile"
                      className="absolute -bottom-8 -right-8 profile"
                    />
                  </div>
                  <div className="flex justify-center sm:justify-end">
                    <div className="relative">
                      <img
                        src={Image2}
                        alt="bottom_image"
                        className="bottom-image ml-auto"
                      />
                      <img
                        src={Profile2}
                        alt="profile"
                        className="absolute -bottom-9 -right-9 profile"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img src={Image3} alt="right_image" className="right-image" />
                  <img
                    src={Profile2}
                    alt="profile-female"
                    className="absolute -bottom-7 -right-7 profile2"
                  />
                </div>
              </div>
            </div>
            {/* Information */}
            <div className="col-span-1 mt-20 lg:my-auto">
              <h1 className="mb-10 text-center md:text-start">
                Create and sell your NFTs
              </h1>
              <p className="mb-8 text-center md:text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisi ac phasellus placerat a pellentesque tellus sed
                egestas. Et tristique dictum sit tristique sed non. Lacinia
                lorem id consectetur pretium diam ut. Pellentesque eu sit
                blandit fringilla risus faucibus.
              </p>
              <button className="button1 sign-up-btn mx-auto md:mx-0">
                Sign Up Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
