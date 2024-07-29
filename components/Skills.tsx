import React from "react";
import Section from "./Section";
import { collabContent, collabText } from "@/constants";
import Image from "next/image";
import { check } from "@/app/assets";
import Button from "./Button";
import IconCloud from "./magicui/Cloud";
import { ScrollText } from "./Text";

const Skills = () => {
  const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "nextdotjs",
    "prisma",
    "postgresql",
    "firebase",
    "vercel",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "adobelightroom",
    "vite",
    "expo",
    "python",
    "jupyter",
    "pandas",
    "numpy",
  ];
  return (
    <>
      <Section crosses id="skills">
        <div className="container lg:flex items-center">
          <div className="max-w-[25rem]">
            <h2 className="h2 mb-4 md:mb-8">About Me</h2>
            <p className="text-n-3">
              Hello, I'm Somanshu Bhardwaj, a Full Stack Developer and a
              Engineering Physics Student at NIT Hamirpur. I love to build
              things that live on the internet. I develop exceptional websites
              and web apps that provide intuitive, pixel-perfect user interfaces
              with efficient and modern backends.
            </p>
            <Button className="mt-5">Try it now</Button>
          </div>
          <div className="lg:ml-auto xl:w-[38rem]">
            <div className="">
              <IconCloud iconSlugs={slugs} />
            </div>
          </div>
        </div>
      </Section>
      {/* <ScrollText /> */}
    </>
  );
};

export default Skills;
