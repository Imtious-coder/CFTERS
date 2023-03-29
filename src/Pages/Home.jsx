import React from "react";
import AllNft from "../components/AllNft/AllNft";
import Featured from "../components/Featured/Featured";
import Hero from "../components/Hero/Hero";
import SignUp from "../components/SignUp/SignUp";
import TopCollections from "../components/TopCollections/TopCollections";
import Transaction from "../components/Transaction/Transaction";

const Home = () => {
  return (
    <>
      <Hero />
      <Transaction />
      <TopCollections />
      <Featured />
      <SignUp />
      <AllNft />
    </>
  );
};

export default Home;
