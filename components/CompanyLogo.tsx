import { companyLogos } from "@/constants";
import Image from "next/image";
import React from "react";

const CompanyLogo = ({ className }: { className: string }) => {
  const stats = [
    {
      title: "Contributions",
      value: "750+",
    },
    {
      title: "Commits(2024)",
      value: "550+",
    },
    {
      title: "Stars",
      value: "40+",
    },
  ];
  return (
    <div className={className}>
      <ul className="md:flex hidden">
        {stats.map((stat, index) => (
          <li className="flex-1 flex flex-col justify-center items-center">
            <span className="text-n-3 font-extralight">{stat.title}</span>
            <span className="text-3xl font-semibold">{stat.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogo;
