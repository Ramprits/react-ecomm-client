import React from "react";
import Categories from "components/Categories";
import Products from "components/Products";
import Slider from "components/Slid";

const Home = () => {
  return (
    <div>
      {/* Slid section */}
      <Slider />

      {/* categories section */}
      <Categories />

      {/* Products */}
      <Products />
    </div>
  );
};

export default Home;
