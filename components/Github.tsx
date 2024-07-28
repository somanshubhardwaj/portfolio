import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";

const Github = () => {
  return (
    <Section id="github" crosses>
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title="What we’re working on" />
      </div>
      <div className="w-full flex justify-center items-center">
        <Button>Get Started</Button>
      </div>
    </Section>
  );
};

export default Github;
