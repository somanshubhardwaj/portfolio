import Button from "@/components/Button";
import ButtonGradient from "@/app/assets/svg/ButtonGradient";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Blogsection from "@/components/Blogsection";
export default function Home() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Projects />
        <Skills />
        <Blogsection />
      </div>
      <ButtonGradient />
    </>
  );
}
