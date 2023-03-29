import React from "react";
import AllNft from "../components/AllNft/AllNft";
import Featured from "../components/Featured/Featured";
import TopCollections from "../components/TopCollections/TopCollections";
import Transaction from "../components/Transaction/Transaction";

const Home = () => {
  return (
    <>
      <Transaction />
      <TopCollections />
      <Featured />
      <AllNft />
    </>
  );
};

export default Home;
