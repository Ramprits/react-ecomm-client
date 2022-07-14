import Announcemnet from "components/Announcemnet";
import Categories from "components/Categories";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Products from "components/Products";
import Slider from "components/Slid";
import React from "react";

const Home = () => {
  return (
    <div>
      {/* Announcement section */}
      <Announcemnet />

      {/* Header section */}
      <Navbar />

      {/* Slid section */}
      <Slider />

      {/* categories section */}
      <Categories />

      {/* Products */}
      <Products />

      <Footer />
    </div>
  );
};

export default Home;
