"use client";
import React, { useRef } from "react";
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import { useInView, motion, Variants } from "framer-motion";

const Github = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInvView = useInView(ref, {});
  const githubVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.1,
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
  };
  return (
    <Section id="github">
      <div className="container md:pb-10">
        <Heading
          tag="I am a passionate Software developer from India"
          title="Github Stats"
        />
      </div>
      <motion.div
        className="flex lg:flex-row flex-col justify-around flex-wrap "
        variants={githubVariants}
        ref={ref}
        animate={!isInvView ? "hidden" : "visible"}
      >
        <motion.img
          variants={githubVariants}
          src="https://github-readme-stats-eight-phi-43.vercel.app/api?username=somanshubhardwaj&show_icons=true&theme=transparent&show=prs_merged&hide_border=true&title_color=fff&text_color=fff&icon_color=fff"
          alt="github"
        />
        <motion.img
          variants={githubVariants}
          src="https://github-readme-streak-stats.herokuapp.com/?user=somanshubhardwaj&theme=transparent&hide_border=true&title_color=fff&text_color=fff&icon_color=fff"
          alt="github"
        />
        <motion.img
          variants={githubVariants}
          src="https://github-readme-stats-eight-phi-43.vercel.app/api/top-langs/?username=somanshubhardwaj&theme=transparent&hide=html,jupyter%20notebook,vue,svelte,go&layout=donut&size_weight=0.5&count_weight=0.5&hide_border=true&title_color=fff&text_color=fff&icon_color=fff"
          alt="github"
        />
      </motion.div>
      <div className="w-full flex justify-center items-center mt-16">
        <Button href="https://github.com/somanshubhardwaj">Visit Github</Button>
      </div>
    </Section>
  );
};

export default Github;
