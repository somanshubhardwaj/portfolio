import { companyLogos } from "@/constants";
import Image from "next/image";
import React from "react";
import NumberTicker from "./magicui/NumberTicker";

const CompanyLogo = ({ className }: { className: string }) => {
  const stats = [
    {
      title: "Contributions",
      value: "870",
    },
    {
      title: "Commits(2024)",
      value: "670",
    },
    {
      title: "PR's",
      value: "35",
    },
  ];
  return (
    <div className={className}>
      <ul className="md:flex hidden">
        {stats.map((stat, index) => (
          <li
            className="flex-1 flex flex-col justify-center items-center"
            key={index}
          >
            <span className="text-n-3 font-extralight">{stat.title}</span>
            <span className="text-3xl font-semibold">
              <NumberTicker value={parseInt(stat.value)} /> +
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogo;
