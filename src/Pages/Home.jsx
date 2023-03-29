import React from "react";
import Featured from "../components/Featured/Featured";
import TopCollections from "../components/TopCollections/TopCollections";
import Transaction from "../components/Transaction/Transaction";

const Home = () => {
  return (
    <>
      <Transaction />
      <TopCollections />
      <Featured />
    </>
  );
};

export default Home;
