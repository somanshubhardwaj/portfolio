"use client";
import React, { useRef } from "react";
import Section from "./Section";
import IconCloud from "./magicui/Cloud";
import { useInView, motion, Variants } from "framer-motion";
const Skills = () => {
  const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "nextdotjs",
    "prisma",
    "postgresql",
    "firebase",
    "vercel",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "adobelightroom",
    "vite",
    "expo",
    "python",
    "jupyter",
    "pandas",
    "numpy",
  ];
  const ref = useRef<HTMLDivElement | null>(null);
  const isInvView = useInView(ref, {});
  const AboutVariants: Variants = {
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
    <>
      <Section crosses id="skills">
        <motion.div
          className="container lg:flex items-center"
          ref={ref}
          animate={isInvView ? "visible" : "hidden"}
          variants={AboutVariants}
        >
          <div className="lg:max-w-[25rem]">
            <motion.h2 className="h2 mb-4 md:mb-8" variants={AboutVariants}>
              About Me
            </motion.h2>
            <motion.p className="text-n-3" variants={AboutVariants}>
              Hello, I'm Somanshu Bhardwaj, a Full Stack Developer and a
              Engineering Physics Student at NIT Hamirpur. I love to build
              things that live on the internet. I develop exceptional websites
              and web apps that provide intuitive, pixel-perfect user interfaces
              with efficient and modern backends.
            </motion.p>
            <motion.h4 className="h5 my-3" variants={AboutVariants}>
              My Stack :
            </motion.h4>
            <div className="">
              <motion.img
                src="https://skillicons.dev/icons?i=typescript,nextjs,react,mongodb,tailwindcss,firebase,vite,vscode&perline=6"
                variants={AboutVariants}
              />
            </div>
          </div>
          <div className="lg:ml-auto xl:w-[38rem]">
            <div className="">
              <IconCloud iconSlugs={slugs} />
            </div>
          </div>
        </motion.div>
      </Section>
      {/* <ScrollText /> */}
    </>
  );
};

export default Skills;
