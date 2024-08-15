import React from "react";
import Section from "./Section";

const Footer = () => {
  return (
    <Section id="footer" crosses className={"!px-0 !py-10"}>
      <div className="container flex justify-center sm:justify-between items-center  gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          {new Date().getFullYear()} © All rights reserved.
        </p>
        <ul className="flex flex-wrap gap-5"></ul>
      </div>
    </Section>
  );
};

export default Footer;
