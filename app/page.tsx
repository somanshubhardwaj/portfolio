import { ModeToggle } from "@/components/component/Mode";
import Image from "next/image";
import IconCloud from "@/components/magicui/icon-cloud";
import { Github, Instagram, Twitter } from "lucide-react";
export default function Home() {
  const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "postgresql",
    "firebase",
    "vercel",
    "docker",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "python",
    "django",
    "adobelightroom",
    "framer",
    "tailwindcss",
    "npm",
    "numpy",
  ];
  return (
    <div className="px-4 md:px-8 lg:px-12 ">
      <header className="py-4 flex">
        <span className="text-xl font-semibold">SOMANSHU BHARDWAJ</span>
        <div className="flex-1 flex justify-end items-center gap-4">
          <a href="">
            <Github />
          </a>
          <a href="">
            <Instagram />
          </a>
          <a href="">
            <Twitter />
          </a>
          <ModeToggle />
        </div>
      </header>
      <main>
        <div className="h-[80vh] w-full flex items-center hero">
          <div className="flex flex-col gap-4">
            <span className="text-xl font-semibold text-[rebeccapurple] tracking-widest">
              SOMANSHU BHARDWAJ
            </span>
            <span className="text-8xl font-bold">Web Developer</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around ">
          <div className="relative flex flex-col h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border  px-20 pb-20 pt-8 ">
            <span className="text-2xl font-bold text-center">Skills</span>
            <IconCloud iconSlugs={slugs} />
          </div>
          <div className="flex flex-col justify-end ">
            <span className="text-2xl fond-bold">GitHub Stats</span>
            <div>
              <img src="https://github-readme-stats-eight-phi-43.vercel.app/api?username=somanshubhardwaj&show_icons=true&theme=transparent&show=prs_merged&hide_border=true" />
              <img
                src="https://github-readme-stats-eight-phi-43.vercel.app/api/top-langs/?username=somanshubhardwaj&theme=transparent&hide=html,jupyter%20notebook,vue,svelte,go&layout=donut&size_weight=0.5&count_weight=0.5&hide_border=true"
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="h-screen w-full"></div>
        <div className="h-screen w-full"></div>
        <div className="h-screen w-full"></div>
      </main>
    </div>
  );
}
