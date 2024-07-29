import React from "react";
import Section from "./Section";

const Contact = () => {
  return (
    <Section>
      <div className="container min-h-[80vh]">
        <div className="flex flex-col">
          <div className="w-full lg:w-1/2">
            <h2 className="h2">Contact</h2>
            <p className="text-n-3">
              I'm currently looking for new opportunities, my inbox is always
              open. Whether you have a question or just want to say hi, I'll try
              my best to get back to you!
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
