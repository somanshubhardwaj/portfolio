import React from "react";
import Section from "./Section";
import Image from "next/image";
import { smallSphere, stars } from "@/app/assets";
import Heading from "./Heading";
import Bloglist from "./Bloglist";
import { LeftLine, RightLine } from "./design/Pricing";
const Blogsection = () => {
  return (
    <Section className={"overflow-hidden "} id={"blog"}>
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex ">
          <Image
            src={smallSphere}
            className="relative"
            alt=""
            width={255}
            height={255}
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Image
              alt=""
              src={stars}
              className="w-full"
              width={950}
              height={400}
            />
          </div>
        </div>
        <Heading title="Pay once use forever" tag="Get started" />
        <div className="relative">
          <Bloglist />
          <LeftLine />
          <RightLine />
        </div>
        <div className="flex justify-center items-center mt-10">
          <a
            href=""
            className="text-xs font-code uppercase tracking-wider border-b font-bold"
          >
            See details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Blogsection;
