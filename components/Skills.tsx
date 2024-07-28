import React from "react";
import Section from "./Section";
import { collabContent, collabText } from "@/constants";
import Image from "next/image";
import { check } from "@/app/assets";
import Button from "./Button";
import IconCloud from "./magicui/Cloud";

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
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">Lorem, ipsum.</h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14 ">
            {collabContent.map((item, index) => (
              <li className="mb-3 py-3 " key={index}>
                <div className="flex items-center">
                  <Image src={check} width={24} height={24} alt="" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}{" "}
              </li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>
        <div className="lg:ml-auto xl:w-[38rem]">
          <div className="">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
