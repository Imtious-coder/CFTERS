import React from "react";
import Image1 from "../../assets/images/transaction/transaction1.png";
import Image2 from "../../assets/images/transaction/transaction2.png";
import "./Transaction.scss";

const Transaction = () => {
  return (
    <>
      <section className="transaction-wrapper py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-10">
            <h1 className="col-span-3 md:col-span-1 text-center sm:text-start">
              The amazing NFT art of the world here
            </h1>
            <div className="col-span-3 flex md:col-span-1 gap-3 px-5 sm:px-0">
              <img src={Image1} alt="" />
              <div>
                <h6 className="mb-2">Fast Transaction</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam etiam viverra tellus imperdiet.
                </p>
              </div>
            </div>
            <div className="col-span-3 flex md:col-span-1 gap-3 px-5 sm:px-0">
              <img src={Image2} alt="" />
              <div>
                <h6 className="mb-2">Growth Transaction</h6>
                <p>
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
