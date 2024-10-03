import React from "react";
import bgHero from "../assets/bg-hero.png";

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen bg-hero relative bg-cover">
        <div className="absolute right-3 md:right-10 rounded-xl w-72 h-80 md:w-96 md:h-72 lg:w-[643px] lg:h-[440px] bg-[#FFF3E3] px-5 md:px-10 lg:py-10">
          <p className="text-lg mt-4 text-base-100 md:text-xl lg:text-2xl font-bold">
            New Arrival
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#B88E2F] my-2 lg:w-[400px] lg:my-5 tracking-wide">
            Discover Our New Collection
          </h1>
          <p className="text-base-100 lg:text-lg font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            et debitis cupiditate dolorum quas ex!
          </p>
          <button className="btn btn-outline bg-[#B88E2F] hover:bg-[#f0ce80] mt-2 text-white md:mt-3 uppercase lg:mt-12 lg:btn-lg">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
