"use client";
import React from "react";
import Section from "./Section";
import Image from "next/image";
import curve from "@/app/assets/hero/curve.png";
import Button from "./Button";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import CompanyLogo from "./CompanyLogo";

const Hero = () => {
  const parallaxRef = React.useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="h-[15vh]"></div>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            <span className="inline-block relative">
              Somanshu Bhardwaj
              <Image
                src={curve}
                className="absolute top-full left-0 w-full "
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Hello, I'm Somanshu Bhardwaj, a Full Stack Developer and an
            Engineering Physics Student at NIT Hamirpur.
          </p>
          <div className="flex gap-2 justify-center items-center">
            <a href="#projects">
              {" "}
              <Button>View Projects</Button>
            </a>
            <Button href="https://github.com/somanshubhardwaj" white>
              visit Github
            </Button>
          </div>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl">
            <div className="relative  rounded-[1rem]"></div>
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]"></div>

          <BackgroundCircles />
        </div>

        <CompanyLogo className=" relative z-10 mt-20 block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
