import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "@/constants";

const Projects = () => {
  return (
    <Section id={"#feature"}>
      <div className="container z-2 relative">
        <Heading
          className={"md:max-w-md lg:max-w-2xl"}
          title={"lorem Ipsum loremm 90 "}
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((benefit, index) => (
            <div key={index}>
              <div>
                <h5>{benefit.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
