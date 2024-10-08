"use client";
import ButtonGradient from "@/app/assets/svg/ButtonGradient";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Github from "@/components/Github";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Projects />
        <Skills />
        {/* <Blogsection /> */}
        <Github />
        <Contact />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
}
