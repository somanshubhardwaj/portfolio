import { ModeToggle } from "@/components/component/Mode";
import Image from "next/image";
import IconCloud from "@/components/magicui/icon-cloud";
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
    <main>
      <header></header>
      <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
        <IconCloud iconSlugs={slugs} />
      </div>
      <ModeToggle />
      <div className="h-screen w-full"></div>
      <div className="h-screen w-full"></div>
      <div className="h-screen w-full"></div>
    </main>
  );
}
