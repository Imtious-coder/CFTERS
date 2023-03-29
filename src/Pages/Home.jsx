import React from "react";
import AllNft from "../components/AllNft/AllNft";
import Featured from "../components/Featured/Featured";
import SignUp from "../components/SignUp/SignUp";
import TopCollections from "../components/TopCollections/TopCollections";
import Transaction from "../components/Transaction/Transaction";

const Home = () => {
  return (
    <>
      <Transaction />
      <TopCollections />
      <Featured />
      <SignUp />
      <AllNft />
    </>
  );
};

export default Home;
