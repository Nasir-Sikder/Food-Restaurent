"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((pre) =>(pre === data.length -1 ? 0 : pre + 1)),
     2000);
     return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1 className="text-3xl text-center uppercase p-4 mt-6 md:text-4xl md:mt-6 xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8 mb-12 rounded-md">
          <Link href="/menu/pizzas">Order Now</Link>
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover rounded-sm"
        />
      </div>
    </div>
  );
};

export default Slider;
