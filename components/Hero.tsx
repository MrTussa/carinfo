"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

import BackgroundVideo from "next-video/background-video";
import awesomeVideo from "/videos/mixkit-classic-red-sports-car-5017-full-hd.mp4";

import { useState, useCallback } from "react";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero relative">
      <BackgroundVideo
        src={awesomeVideo}
        className="shadow-[0_-15px_20px_-5px_white_inset]"
      >
        <div className="flex-1 padding-x relative pt-20px box-border md:pt-20 pt-8">
          <div className="z-10 xl:w-1/2 md:w-4/6 sm:w-5/6 w-full  bg-white opacity-80 h-full p-6 rounded-3xl">
            <h1 className="hero__title">Найти машину - быстро и легко!</h1>
            <p className="hero__subtitle">
              Упростите поиск нужной вам машины при помощи нашего сайта.
            </p>

            <CustomButton
              title="Найти машину"
              containerStyles="bg-primary-blue text-white rounded-full mt-10"
              handleClick={handleScroll}
            />
          </div>
        </div>
      </BackgroundVideo>
      {/* <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" /> 
      </div> */}
    </div>
  );
};

export default Hero;
