import React from "react";
import HeroSection from "./HomeComponents/HeroSection/HeroSection";
import Furns from "./HomeComponents/FurnsSection/Furns";
import Products from "./HomeComponents/Products/Products";

const HomeIndex = () => {
  return <div>
    <HeroSection/>
    <Furns/>
    <Products/>
  </div>;
};

export default HomeIndex;
