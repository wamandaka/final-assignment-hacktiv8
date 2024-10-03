import React from "react";
import Navbar from "../components/Navbar";
import Category from "../components/Category";
import Products from "../components/Products";
import ClickToAction from "../components/ClickToAction";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Products />
      <ClickToAction />
      <Footer />
    </div>
  );
};

export default Home;
