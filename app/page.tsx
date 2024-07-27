import Button from "@/components/Button";
import ButtonGradient from "@/app/assets/svg/ButtonGradient.tsx";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Projects />
      </div>
      <ButtonGradient />
    </>
  );
}
