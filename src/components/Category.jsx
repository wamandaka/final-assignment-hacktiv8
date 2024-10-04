import React from "react";

const Category = () => {
  return (
    <div className="px-4 my-14 md:px-6 lg:px-10">
      <div className="text-center my-14">
        <h1 className="text-3xl font-bold mb-3">Category</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, soluta?
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-5 lg:gap-8 text-center">
        <a
          href="/products/category/electronics"
          className="h-32 rounded-lg bg-[#FFF3E3] flex items-center justify-center font-bold text-lg text-base-100 uppercase"
        >
          Electronics
        </a>
        <a
          href="/products/category/jewelery"
          className="h-32 rounded-lg bg-[#FFF3E3] flex items-center justify-center font-bold text-lg text-base-100 uppercase"
        >
          Jewelry
        </a>
        <a
          href="/products/category/men's clothing"
          className="h-32 rounded-lg bg-[#FFF3E3] flex items-center justify-center font-bold text-lg text-base-100 uppercase"
        >
          Men's Clothing
        </a>
        <a
          href="/products/category/women's clothing"
          className="h-32 rounded-lg bg-[#FFF3E3] flex items-center justify-center font-bold text-lg text-base-100 uppercase"
        >
          Women's Clothing
        </a>
      </div>
    </div>
  );
};

export default Category;
