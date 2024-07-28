import React from "react";
import Section from "./Section";
import { collabContent, collabText } from "@/constants";
import Image from "next/image";
import { check } from "@/app/assets";
import Button from "./Button";

const Skills = () => {
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
          <p className="body-2 mb-4 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
