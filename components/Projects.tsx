"use client";
import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { projects } from "@/constants";
import Image from "next/image";
import Arrow from "@/app/assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "@/app/assets/svg/ClipPath";
import { LuGithub } from "react-icons/lu";
import { useInView, motion, Variants } from "framer-motion";
import { useRef } from "react";
const Projects = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInvView = useInView(ref, {
    once: true,
  });
  const projectsVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };
  return (
    <Section id={"projects"}>
      <div className="container z-2 relative">
        <Heading className={"md:max-w-md lg:max-w-2xl"} title={"Projects "} />
        <motion.div
          className="flex flex-wrap gap-10 mb-10"
          ref={ref}
          animate={isInvView ? "visible" : "hidden"}
          variants={projectsVariants}
        >
          {projects.map((item) => (
            <motion.div
              variants={projectsVariants}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] mx-auto"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-50 flex flex-col min-h-[22rem] p-[2.4rem] ">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-1 text-n-3">{item.text}</p>

                <div className="flex items-center mt-auto">
                  <a href={item.git} className=" " target="_blank">
                    <LuGithub size={25} />
                  </a>
                  <a
                    href={item.href}
                    className="ml-auto flex items-center cursor-pointer "
                    target="_blank"
                  >
                    <p className=" font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                      Visit
                    </p>
                    <Arrow />
                  </a>
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10 ">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Projects;
