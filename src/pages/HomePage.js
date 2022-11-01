import React from "react";

import Landing from "../components/Landing";
import MainAdd from "../components/advertisment/MainAdd";
import SecondaryAdd from "../components/advertisment/SecondaryAdd";
import Category from "../components/category";
import Banner from "../components/banner";
import Footer from "../components/footer";


const HomePage = () => {
  return (
    <div>
      <Landing />
      <Category />
      <MainAdd />
      <SecondaryAdd />
      <Banner />
      <Footer />
    </div>
  );
};

export default HomePage;
