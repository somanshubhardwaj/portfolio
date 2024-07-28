import { pricing } from "@/constants";
import React from "react";
import Button from "./Button";
import { check } from "@/app/assets";
import Image from "next/image";

const Bloglist = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item, index) => (
        <div
          key={index}
          id={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto py-14  [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">{item.title}</h4>
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>
          <Button className="w-full mb-6" href="" white>
            Get Started
          </Button>
          <ul>
            {item.features.map((feature, index) => (
              <li
                className="flex items-start py-5 border-t border-n-6"
                key={index}
              >
                <Image src={check} width={24} height={24} alt="" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
