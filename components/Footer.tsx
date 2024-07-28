import React from "react";
import Section from "./Section";
import { socials } from "@/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <Section id="footer" crosses className={"!px-0 !py-10"}>
      <div className="container flex justify-center sm:justify-between items-center  gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          {new Date().getFullYear()} © All rights reserved.
        </p>
        <ul className="flex flex-wrap gap-5">
          {socials.map((social, index) => (
            <a
              href={social.url}
              key={index}
              className="flex w-10 h-10 items-center justify-center bg-n-7 rounded-full hover:bg-n-6 transition-colors"
            >
              <Image
                src={social.iconUrl}
                alt={social.title}
                width={16}
                height={16}
              />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
