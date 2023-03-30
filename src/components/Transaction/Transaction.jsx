import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Image1 from "../../assets/images/transaction/transaction1.png";
import Image2 from "../../assets/images/transaction/transaction2.png";
import "./Transaction.scss";

const Transaction = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <section className="transaction-wrapper py-10 sm:py-28 px-3 sm:px-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-10 sm:gap-20">
            <h1 className="Integral col-span-3 md:col-span-1 text-center sm:text-start">
              The amazing NFT art of the world here
            </h1>
            <div className="col-span-3 flex md:col-span-1 gap-3.5 px-5 sm:px-0">
              <img data-aos="flip-left" src={Image1} alt="transaction" />
              <div>
                <h6 className="mb-3 DM">Fast Transaction</h6>
                <p className="DM">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam etiam viverra tellus imperdiet.
                </p>
              </div>
            </div>
            <div className="col-span-3 flex md:col-span-1 gap-3.5 px-5 sm:px-0">
              <img data-aos="flip-left" src={Image2} alt="transaction" />
              <div>
                <h6 className="mb-3 DM">Growth Transaction</h6>
                <p className="DM">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam etiam viverra tellus
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Transaction;
