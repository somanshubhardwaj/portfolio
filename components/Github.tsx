import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";

const Github = () => {
  return (
    <Section id="github" crosses>
      <div className="container md:pb-10">
        <Heading
          tag="I am a passionate Software developer from India"
          title="Github Stats"
        />
      </div>
      <div className="flex md:flex-row flex-col justify-around gap-5">
        <img
          src="https://github-readme-stats-eight-phi-43.vercel.app/api?username=somanshubhardwaj&show_icons=true&theme=transparent&show=prs_merged&hide_border=true&title_color=fff&text_color=fff&icon_color=fff"
          alt="github"
        />
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=somanshubhardwaj&theme=transparent&hide_border=true&title_color=fff&text_color=fff&icon_color=fff"
          alt="github"
        />
        <img
          src="https://github-readme-stats-eight-phi-43.vercel.app/api/top-langs/?username=somanshubhardwaj&theme=transparent&hide=html,jupyter%20notebook,vue,svelte,go&layout=donut&size_weight=0.5&count_weight=0.5&hide_border=true&title_color=fff&text_color=fff&icon_color=fff"
          alt="github"
        />
      </div>
      <div className="w-full flex justify-center items-center mt-16">
        <Button href="https://github.com/somanshubhardwaj">Visit Github</Button>
      </div>
    </Section>
  );
};

export default Github;
