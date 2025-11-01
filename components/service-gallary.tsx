"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-[75vh] w-full p-2">
    
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Our Premium Showroom
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Experience luxury timepieces in our elegant showroom, designed to showcase 
        the finest Swiss and international watch collections.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Expert Service Center
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Our state-of-the-art service facility with Swiss-trained technicians 
        ensuring your timepieces receive the finest care and precision maintenance.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Heritage & Excellence
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Since 1908, we&apos;ve been the trusted destination for timepiece 
        enthusiasts seeking authentic luxury watches and professional expertise.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Professional Consultation
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Our certified specialists provide personalized guidance to help you 
        find the perfect timepiece that matches your style and requirements.
      </p>
    </div>
  );
};

const cards = [
  // Row 1
  {
    id: 1,
    content: <SkeletonOne />,
    className: "col-span-1 md:col-span-2 row-span-1",
    thumbnail: "/showroom/showroom1.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1 row-span-1",
    thumbnail: "/showroom/service1.jpg",
  },
  {
    id: 3,
    content: <SkeletonTwo />,
    className: "col-span-1 row-span-1",
    thumbnail: "/showroom/service2.jpg",
  },
  {
    id: 4,
    content: <SkeletonOne />,
    className: "col-span-1 row-span-1",
    thumbnail: "/showroom/FRONT.JPG",
  },
  // Row 2
  {
    id: 5,
    content: <SkeletonOne />,
    className: "col-span-1 row-span-1",
    thumbnail: "/showroom/showroom2.jpg",
  },
  {
    id: 6,
    content: <SkeletonFour />,
    className: "col-span-1 md:col-span-2 row-span-1",
    thumbnail: "/showroom/DSC_5810.JPG",
  },
];
