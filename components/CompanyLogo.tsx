import { companyLogos } from "@/constants";
import Image from "next/image";
import React from "react";

const CompanyLogo = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50 ">
        Lorem, ipsum dolor.
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center flex-1 h-[8.5rem] justify-center "
            key={index}
          >
            <Image src={logo} alt="Company Logo" width={134} height={28} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogo;
